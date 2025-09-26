// /src/components/Search.tsx

import { useState, useEffect, useRef, useMemo } from 'preact/hooks';
import Fuse from 'fuse.js';

// Types to match the data structure from getNavLinks in navigation.ts
interface NavItem {
  url: string;
  title: string;
  children: NavItem[];
}

interface NavGroup {
  title:string;
  pages: NavItem[];
}

interface Props {
  navGroups: NavGroup[];
}

// A flattened search entry for Fuse.js
interface SearchablePage {
    url: string;
    title: string;
    breadcrumbs: string[];
}

// Recursive component to render the search result tree
function SearchResultItem({ item }: { item: NavItem }) {
    const hasChildren = item.children && item.children.length > 0;

    return (
        <li>
            {hasChildren ? (
                // Use <details> for expandable sections, default to open for search results
                <details open>
                    <summary>
                        <a href={item.url}>{item.title}</a>
                    </summary>
                    <ul>
                        {item.children.map(child => <SearchResultItem key={child.url} item={child} />)}
                    </ul>
                </details>
            ) : (
                <a href={item.url}>{item.title}</a>
            )}
        </li>
    );
}

export default function Search({ navGroups }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NavGroup[]>([]);
  const searchInput = useRef<HTMLInputElement>(null);

  // 1. Flatten the navigation tree to a list for Fuse.js to search
  const searchablePages = useMemo(() => {
    const pages: SearchablePage[] = [];
    const flatten = (items: NavItem[], breadcrumbs: string[]) => {
        items.forEach(item => {
            const newBreadcrumbs = [...breadcrumbs, item.title];
            pages.push({
                url: item.url,
                title: item.title,
                breadcrumbs: breadcrumbs
            });
            if (item.children.length > 0) {
                flatten(item.children, newBreadcrumbs);
            }
        });
    };
    navGroups.forEach(group => flatten(group.pages, [group.title]));
    return pages;
  }, [navGroups]);

  const fuse = useMemo(() => new Fuse(searchablePages, {
    keys: ['title', 'breadcrumbs'],
    includeScore: true,
    threshold: 0.4,
  }), [searchablePages]);

  useEffect(() => {
    if (isOpen) {
      searchInput.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = fuse.search(query);
    const matchingUrls = new Set(searchResults.map(result => result.item.url));

    const filterTree = (nodes: NavItem[]): NavItem[] => {
        return nodes
          .map(node => {
            const children = filterTree(node.children);
            if (children.length > 0 || matchingUrls.has(node.url)) {
              // Return a new object to avoid mutating original state
              return { ...node, children };
            }
            return null;
          })
          .filter((node): node is NavItem => node !== null);
      };

    const filteredNavGroups = navGroups.map(group => ({
        ...group,
        pages: filterTree(group.pages),
    })).filter(group => group.pages.length > 0);

    setResults(filteredNavGroups);
  }, [query, navGroups, fuse]);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} class="search-button">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8787 12.1716C13.0739 12.3668 13.0739 12.6834 12.8787 12.8787C12.6834 13.0739 12.3668 13.0739 12.1716 12.8787L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        Search
        <span class="search-shortcut">⌘K</span>
      </button>

      {isOpen && (
        <div class="modal-overlay" onClick={() => setIsOpen(false)}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()}>
            <input
              ref={searchInput}
              type="text"
              placeholder="Search documentation..."
              value={query}
              onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
              class="search-input"
            />
            <ul class="search-results">
              {results.length > 0 ? (
                results.map(group => (
                    <li class="search-result-group" key={group.title}>
                        <h3 class="search-result-group-title">{group.title}</h3>
                        <ul>
                            {group.pages.map(item => <SearchResultItem key={item.url} item={item} />)}
                        </ul>
                    </li>
                ))
              ) : (
                query.trim() !== '' && <li class="no-results">No results found.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}