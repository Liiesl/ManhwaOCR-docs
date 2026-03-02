import { useState, useEffect, useRef, useMemo, useCallback } from 'preact/hooks';
import Fuse from 'fuse.js';
import type { FuseResultMatch } from 'fuse.js';
import type { JSX } from 'preact';

interface Heading {
  level: number;
  text: string;
  anchor: string;
  position: number;
}

interface SearchItem {
  url: string;
  title: string;
  description: string;
  breadcrumbs: string[];
  content: string;
  headings: Heading[];
  order: number;
}

interface FlatResult {
  item: SearchItem;
  anchor?: string;
}

interface Props {
  navGroups: { title: string; pages: any[] }[];
}

function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <>{text}</>;

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(t => t.length >= 2)
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (!terms.length) return <>{text}</>;

  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts: (string | JSX.Element)[] = [];

  text.split(regex).forEach((part, i) => {
    if (regex.test(part)) {
      parts.push(<mark key={i}>{part}</mark>);
    } else {
      parts.push(part);
    }
  });

  return <>{parts}</>;
}

function findMatchPosition(content: string, query: string): number {
  if (!query.trim()) return -1;

  const lowerContent = content.toLowerCase();
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length >= 2);

  for (const term of terms) {
    const idx = lowerContent.indexOf(term);
    if (idx !== -1) return idx;
  }

  return -1;
}

function findNearestHeading(headings: Heading[], position: number): Heading | null {
  let nearest: Heading | null = null;

  for (const heading of headings) {
    if (heading.position <= position) {
      nearest = heading;
    } else {
      break;
    }
  }

  return nearest;
}

function getResultUrl(item: SearchItem, query: string): string {
  const matchPosition = findMatchPosition(item.content, query);

  if (matchPosition !== -1 && item.headings.length > 0) {
    const nearestHeading = findNearestHeading(item.headings, matchPosition);
    if (nearestHeading) {
      return `${item.url}#${nearestHeading.anchor}`;
    }
  }

  return item.url;
}

function getSnippet(content: string, query: string, maxLength = 140): string {
  if (!query.trim()) return content.slice(0, maxLength) + (content.length > maxLength ? '...' : '');

  const lowerContent = content.toLowerCase();
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length >= 2);

  if (!terms.length) {
    return content.slice(0, maxLength) + (content.length > maxLength ? '...' : '');
  }

  let matchIndex = -1;

  for (const term of terms) {
    const idx = lowerContent.indexOf(term);
    if (idx !== -1) {
      matchIndex = idx;
      break;
    }
  }

  if (matchIndex === -1) {
    return content.slice(0, maxLength) + (content.length > maxLength ? '...' : '');
  }

  const snippetStart = Math.max(0, matchIndex - 50);
  const snippetEnd = Math.min(content.length, snippetStart + maxLength);
  let snippet = content.slice(snippetStart, snippetEnd);

  if (snippetStart > 0) snippet = '...' + snippet;
  if (snippetEnd < content.length) snippet = snippet + '...';

  return snippet;
}

function highlightSnippet(snippet: string, query: string): any {
  if (!query.trim()) return snippet;

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(t => t.length >= 2)
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (!terms.length) return snippet;

  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts: (string | JSX.Element)[] = [];

  snippet.split(regex).forEach((part: string, i: number) => {
    if (regex.test(part)) {
      parts.push(<mark key={`${i}`}>{part}</mark>);
    } else {
      parts.push(part);
    }
  });

  return <>{parts}</>;
}

export default function Search({ navGroups }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInput = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const selectedItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => {
        setSearchIndex(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load search index:', err);
        setIsLoading(false);
      });
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.2 },
        { name: 'content', weight: 0.3 },
        { name: 'breadcrumbs', weight: 0.1 }
      ],
      includeScore: true,
      includeMatches: true,
      threshold: 0.35,
      minMatchCharLength: 2,
      ignoreLocation: true,
      useExtendedSearch: false
    });
  }, [searchIndex]);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const searchResults = fuse.search(query);
    return searchResults.slice(0, 20) as unknown as { item: SearchItem; matches?: readonly FuseResultMatch[] }[];
  }, [query, fuse]);

  const flatResults = useMemo((): FlatResult[] => {
    return results.map(r => {
      const matchPosition = findMatchPosition(r.item.content, query);
      let anchor: string | undefined;

      if (matchPosition !== -1 && r.item.headings.length > 0) {
        const nearestHeading = findNearestHeading(r.item.headings, matchPosition);
        anchor = nearestHeading?.anchor;
      }

      return { item: r.item, anchor };
    });
  }, [results, query]);

  const groupedResults = useMemo(() => {
    const groups: { [key: string]: FlatResult[] } = {};

    for (const result of flatResults) {
      const section = result.item.breadcrumbs[0] || 'Other';
      if (!groups[section]) groups[section] = [];
      groups[section].push(result);
    }

    const sectionOrder: { [key: string]: number } = { 'Introduction': 0, 'Getting Started': 1, 'User Manual': 2, 'Workflow': 3 };

    return Object.entries(groups).sort((a, b) => {
      return (sectionOrder[a[0]] ?? 99) - (sectionOrder[b[0]] ?? 99);
    });
  }, [flatResults]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      searchInput.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    selectedItemRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [selectedIndex]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      setIsOpen(false);
      return;
    }

    if (event.key === 'Escape') {
      setIsOpen(false);
      return;
    }

    if (flatResults.length === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => (prev + 1) % flatResults.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => (prev - 1 + flatResults.length) % flatResults.length);
        break;
      case 'Enter':
        event.preventDefault();
        if (flatResults[selectedIndex]) {
          const { item, anchor } = flatResults[selectedIndex];
          const url = anchor ? `${item.url}#${anchor}` : item.url;
          window.location.href = url;
          setIsOpen(false);
        }
        break;
    }
  }, [isOpen, flatResults, selectedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  let globalIndex = 0;

  return (
    <div>
      <button onClick={() => setIsOpen(true)} class="search-button">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8787 12.1716C13.0739 12.3668 13.0739 12.6834 12.8787 12.8787C12.6834 13.0739 12.3668 13.0739 12.1716 12.8787L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
        Search
        <span class="search-shortcut">⌘K</span>
      </button>

      {isOpen && (
        <div class="modal-overlay" onClick={() => setIsOpen(false)}>
          <div class="modal-content search-modal" onClick={(e) => e.stopPropagation()}>
            <div class="search-header">
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8787 12.1716C13.0739 12.3668 13.0739 12.6834 12.8787 12.8787C12.6834 13.0739 12.3668 13.0739 12.1716 12.8787L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
              <input
                ref={searchInput}
                type="text"
                placeholder="Search documentation..."
                value={query}
                onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
                class="search-input"
              />
              {query && (
                <button
                  class="search-clear"
                  onClick={() => { setQuery(''); searchInput.current?.focus(); }}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div class="search-results-container" ref={resultsContainerRef}>
              {isLoading ? (
                <div class="search-loading">Loading search index...</div>
              ) : query.trim().length < 2 ? (
                <div class="search-hint">
                  <p>Type at least 2 characters to search</p>
                  <p class="search-hint-sub">Search across {searchIndex.length} pages including titles, descriptions, and full content</p>
                </div>
              ) : groupedResults.length > 0 ? (
                <ul class="search-results">
                  {groupedResults.map(([section, sectionResults]) => (
                    <li class="search-result-section" key={section}>
                      <h3 class="search-result-section-title">{section}</h3>
                      <ul class="search-result-items">
                        {sectionResults.map(({ item, anchor }) => {
                          const snippet = getSnippet(item.content, query);
                          const hasContentMatch = item.content.toLowerCase().includes(query.toLowerCase());
                          const isSelected = globalIndex === selectedIndex;
                          const currentIndex = globalIndex++;
                          const resultUrl = anchor ? `${item.url}#${anchor}` : item.url;

                          return (
                            <li class={`search-result-item ${isSelected ? 'selected' : ''}`} key={item.url + (anchor || '')}>
                              <a
                                href={resultUrl}
                                class="search-result-link"
                                onClick={() => setIsOpen(false)}
                                ref={isSelected ? selectedItemRef : undefined}
                                onMouseEnter={() => setSelectedIndex(currentIndex)}
                              >
                                <div class="search-result-header">
                                  <span class="search-result-title">
                                    {highlightText(item.title, query)}
                                  </span>
                                  {item.breadcrumbs.length > 1 && (
                                    <span class="search-result-breadcrumbs">
                                      {item.breadcrumbs.slice(1, -1).join(' › ')}
                                    </span>
                                  )}
                                  {anchor && (
                                    <span class="search-result-anchor">§ {item.headings.find(h => h.anchor === anchor)?.text || anchor}</span>
                                  )}
                                </div>
                                {(hasContentMatch || item.description) && (
                                  <div class="search-result-snippet">
                                    {hasContentMatch
                                      ? highlightSnippet(snippet, query)
                                      : item.description
                                    }
                                  </div>
                                )}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <div class="no-results">
                  <p>No results found for "{query}"</p>
                  <p class="no-results-hint">Try different keywords or check your spelling</p>
                </div>
              )}
            </div>

            <div class="search-footer">
              <span class="search-footer-item">
                <kbd>↑</kbd> <kbd>↓</kbd> to navigate
              </span>
              <span class="search-footer-item">
                <kbd>↵</kbd> to select
              </span>
              <span class="search-footer-item">
                <kbd>esc</kbd> to close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
