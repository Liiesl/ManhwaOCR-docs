// /src/components/Search.tsx

import { useState, useEffect, useRef } from 'preact/hooks';
import Fuse from 'fuse.js';

interface Page {
  url: string;
  frontmatter: {
    title: string;
    description?: string;
  };
}

interface Props {
  pages: Page[];
}

export default function Search({ pages }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Page[]>([]);
  const searchInput = useRef<HTMLInputElement>(null);

  const fuse = new Fuse(pages, {
    keys: ['frontmatter.title', 'frontmatter.description'],
    includeScore: true,
    threshold: 0.4,
  });

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

    const searchResults = fuse.search(query).map(result => result.item);
    setResults(searchResults);
  }, [query]);

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
              {results.map(page => (
                <li key={page.url}>
                  <a href={page.url}>
                    <h4>{page.frontmatter.title}</h4>
                    <p>{page.frontmatter.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}