// your-docs-site/.eleventy.js

const markdownIt = require("markdown-it");
const markdownItHighlightJS = require("markdown-it-highlightjs");
// REMOVED: const pluginTOC = require('@uncenter/eleventy-plugin-toc');

module.exports = function(eleventyConfig) {
    // Copy the 'assets' directory to the output folder.
    // Eleventy will automatically pick up the new 'assets/js' subdirectory.
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("robots.txt");

    // REMOVED: The addPlugin call for TOC is gone.
    // eleventyConfig.addPlugin(pluginTOC, ...);

    // Configure markdown-it to use highlight.js
    const md = markdownIt({
        html: true,
    }).use(markdownItHighlightJS);
    eleventyConfig.setLibrary("md", md);

    // The rest of the file (createTree function, navTree collection) remains unchanged.
    const createTree = (pages, applySort = true) => {
        const tree = [];
        const pagesByUrl = {};
        pages.forEach(page => {
            pagesByUrl[page.url] = { ...page.data, url: page.url, children: [] };
        });
        Object.values(pagesByUrl).forEach(page => {
            const parentUrl = page.url.substring(0, page.url.lastIndexOf('/', page.url.length - 2) + 1);
            if (parentUrl && parentUrl !== '/' && pagesByUrl[parentUrl] && page.url !== parentUrl) {
                pagesByUrl[parentUrl].children.push(page);
            } else {
                tree.push(page);
            }
        });
        if (applySort) {
            const sortByOrder = (arr) => arr.sort((a, b) => (a.order || 0) - (b.order || 0));
            sortByOrder(tree);
            Object.values(pagesByUrl).forEach(page => {
                if (page.children.length > 0) {
                    sortByOrder(page.children);
                }
            });
        }
        return tree;
    };
    eleventyConfig.addCollection("navTree", function(collectionApi) {
        const docs = collectionApi.getFilteredByTag('docs');
        const introPages = [];
        const gettingStartedPages = [];
        const introUrls = ['/', '/faq/'];
        docs.forEach(page => {
            if (introUrls.includes(page.url)) {
                introPages.push(page);
            } else {
                gettingStartedPages.push(page);
            }
        });
        const navGroups = [
            { title: "Introduction", pages: createTree(introPages, false) },
            { title: "Getting Started", pages: createTree(gettingStartedPages) }
        ];
        return navGroups.filter(group => group.pages.length > 0);
    });

    return {
        dir: {
            input: "docs",
            output: "_site",
            includes: "../_includes",
            data: "../_data"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};