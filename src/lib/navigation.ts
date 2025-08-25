// your-new-docs-site/src/lib/navigation.ts

export interface NavItem {
    url: string;
    title: string;
    order?: number;
    children: NavItem[];
}

interface MarkdownModule {
    url: string;
    frontmatter: {
        title?: string;
        order?: number;
    };
}

// This function is correct and does not need to change.
const createTree = (pages: NavItem[]): NavItem[] => {
    const tree: NavItem[] = [];
    const pagesByUrl: Record<string, NavItem> = {};

    pages.forEach(page => {
        pagesByUrl[page.url] = { ...page, children: [] };
    });

    Object.values(pagesByUrl).forEach(page => {
        const lastSlashIndex = page.url.lastIndexOf('/');
        const parentUrl = lastSlashIndex > 0 ? page.url.substring(0, lastSlashIndex) : '/';
        
        if (pagesByUrl[parentUrl] && page.url !== parentUrl) {
            pagesByUrl[parentUrl].children.push(page);
        } else {
            tree.push(page);
        }
    });

    const sortByOrder = (arr: NavItem[]) => arr.sort((a, b) => (a.order || 0) - (b.order || 0));
    sortByOrder(tree);
    Object.values(pagesByUrl).forEach(page => {
        if (page.children.length > 0) {
            sortByOrder(page.children);
        }
    });

    return tree;
};

export const getNavLinks = async () => {
    const docs = await import.meta.glob('/src/pages/**/*.md');

    const introPages: NavItem[] = [];
    const gettingStartedPages: NavItem[] = [];

    const introUrls = ['/faq'];

    for (const path in docs) {
        const doc = (await docs[path]()) as MarkdownModule;
        
        if (doc.frontmatter.title) {
            const page: NavItem = {
                url: doc.url || '/',
                title: doc.frontmatter.title,
                order: doc.frontmatter.order,
                children: [] 
            };

            if (path === '/src/pages/index.md' || introUrls.includes(page.url)) {
                introPages.push(page);
            } else {
                gettingStartedPages.push(page);
            }
        }
    }

    // --- THIS IS THE FIX ---
    // Sort the introduction pages by their 'order' frontmatter,
    // but do not process them with createTree. This keeps them as a flat list.
    introPages.sort((a, b) => (a.order || 0) - (b.order || 0));

    const navGroups = [
        // Assign the flat, sorted array directly to the 'pages' property.
        { title: "Introduction", pages: introPages },
        // The "Getting Started" section will still have a nested tree structure.
        { title: "Getting Started", pages: createTree(gettingStartedPages) }
    ];

    return navGroups.filter(group => group.pages.length > 0);
};