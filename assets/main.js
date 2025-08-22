// your-docs-site/assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const tocContainer = document.getElementById('toc-nav');
    const tocSidebar = document.querySelector('.toc-sidebar');

    // Make sure the necessary elements exist
    if (!content || !tocContainer || !tocSidebar) {
        return;
    }

    // Find all h2 and h3 headings within the main content area
    const headings = content.querySelectorAll('h2, h3');
    
    // If there are no headings, hide the "On this page" sidebar completely
    if (headings.length === 0) {
        tocSidebar.style.display = 'none';
        return;
    }

    // Create the list that will hold the navigation links
    const tocList = document.createElement('ul');

    headings.forEach(heading => {
        // Create a URL-friendly slug from the heading text
        const slugify = (text) => text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text

        // Get the ID from the heading, or create one if it doesn't exist
        const id = heading.id || slugify(heading.textContent);
        heading.id = id; // Ensure the heading has the ID for the anchor link to work

        // Create the list item and the link
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = `#${id}`;
        link.textContent = heading.textContent;
        
        // Add a class based on the heading level (h2, h3) for styling
        listItem.classList.add(`toc-level-${heading.tagName.toLowerCase()}`);
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });

    // Add the generated list to the navigation container
    tocContainer.appendChild(tocList);
});