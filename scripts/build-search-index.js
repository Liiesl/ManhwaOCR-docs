import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'search-index.json');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50)
    .replace(/-+$/, '');
}

function stripMarkdown(content) {
  return content
    .replace(/---[\s\S]*?---/, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`{3}[\s\S]*?`{3}/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, ' ')
    .replace(/[*_~`]/g, '')
    .replace(/^\s*[-*+]\s+/gm, ' ')
    .replace(/^\s*\d+\.\s+/gm, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeadings(content) {
  const headings = [];
  const normalizedContent = content.replace(/\r\n/g, '\n');
  const lines = normalizedContent.split('\n');
  let charPosition = 0;

  for (const line of lines) {
    const match = line.match(/^(#{2,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const anchor = slugify(text);
      headings.push({
        level,
        text,
        anchor,
        position: charPosition
      });
    }
    charPosition += line.length + 1;
  }

  return headings;
}

function getAllMarkdownFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

function parseFrontmatter(content) {
  const normalizedContent = content.replace(/\r\n/g, '\n');
  const match = normalizedContent.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, body: content };

  const frontmatter = match[1];
  const body = normalizedContent.slice(match[0].length);
  const data = {};

  for (const line of frontmatter.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  }

  return { data, body };
}

function filePathToUrl(filePath) {
  const relativePath = path.relative(PAGES_DIR, filePath);
  let url = '/' + relativePath.replace(/\.md$/, '').replace(/\\/g, '/');

  if (url.endsWith('/index')) {
    url = url.slice(0, -5);
  }

  return url || '/';
}

function buildBreadcrumbs(url, title) {
  const parts = url.split('/').filter(Boolean);
  const breadcrumbs = [];

  if (parts.length === 0) return ['Introduction'];

  const sectionMap = {
    'getting-started': 'Getting Started',
    'user-manual': 'User Manual',
    'workflow': 'Workflow',
    'faq': 'Introduction'
  };

  const section = parts[0];
  if (sectionMap[section]) {
    breadcrumbs.push(sectionMap[section]);
  }

  breadcrumbs.push(title);

  return breadcrumbs;
}

function findNearestHeading(headings, contentPosition) {
  let nearest = null;

  for (const heading of headings) {
    if (heading.position <= contentPosition) {
      nearest = heading;
    } else {
      break;
    }
  }

  return nearest;
}

function buildSearchIndex() {
  console.log('Building search index...');

  const files = getAllMarkdownFiles(PAGES_DIR);
  const index = [];

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const { data, body } = parseFrontmatter(content);

      if (!data.title) continue;

      const url = filePathToUrl(file);
      const headings = extractHeadings(body);
      const cleanContent = stripMarkdown(body);

      index.push({
        url,
        title: data.title,
        description: data.description || '',
        breadcrumbs: buildBreadcrumbs(url, data.title),
        content: cleanContent.substring(0, 3000),
        headings,
        order: parseInt(data.order) || 0
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  index.sort((a, b) => {
    const sectionOrder = { 'Introduction': 0, 'Getting Started': 1, 'User Manual': 2, 'Workflow': 3 };
    const aSection = a.breadcrumbs[0] || '';
    const bSection = b.breadcrumbs[0] || '';

    if (sectionOrder[aSection] !== sectionOrder[bSection]) {
      return (sectionOrder[aSection] || 99) - (sectionOrder[bSection] || 99);
    }

    return a.order - b.order;
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));
  console.log(`Search index built: ${index.length} pages indexed`);
  console.log(`Output: ${OUTPUT_FILE}`);
}

buildSearchIndex();
