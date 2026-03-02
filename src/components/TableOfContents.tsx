// src/components/TableOfContents.tsx
// Interactive Table of Contents with scroll spy highlighting

import { useState, useEffect, useRef } from 'preact/hooks';
import type { JSX } from 'preact';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
}

export default function TableOfContents({ headings }: Props): JSX.Element | null {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Filter for h2 and h3 headings
  const filteredHeadings = headings.filter(h => h.depth === 2 || h.depth === 3);
  
  if (filteredHeadings.length === 0) {
    return null;
  }

  useEffect(() => {
    // Get all heading elements
    const headingElements = filteredHeadings
      .map(h => document.getElementById(h.slug))
      .filter(Boolean) as HTMLElement[];
    
    if (headingElements.length === 0) return;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible/intersecting
        const visibleEntries = entries.filter(e => e.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // If multiple are visible, pick the one with largest intersection ratio
          const topEntry = visibleEntries.reduce((prev, current) => 
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveId(topEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-10% 0px -60% 0px', // Trigger when heading is near top of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // Observe all heading elements
    headingElements.forEach(el => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [filteredHeadings]);

  // Handle click to scroll smoothly
  const handleClick = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      history.pushState(null, '', `#${slug}`);
    }
  };

  return (
    <>
      <h3>On this page</h3>
      <nav id="toc-nav" aria-label="Table of contents">
        <ul>
          {filteredHeadings.map(heading => (
            <li 
              key={heading.slug}
              className={`toc-level-h${heading.depth} ${activeId === heading.slug ? 'active' : ''}`}
            >
              <a 
                href={`#${heading.slug}`}
                onClick={(e) => handleClick(e, heading.slug)}
                className={activeId === heading.slug ? 'active' : ''}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
