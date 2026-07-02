import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Try multiple strategies to find the books directory
function findBooksDirectory(): string {
  // Strategy 1: Relative to CWD (works in development and production)
  const cwdPath = path.join(process.cwd(), 'books');
  if (fs.existsSync(cwdPath)) {
    console.log('[chapters.ts] Using CWD path:', cwdPath);
    return cwdPath;
  }

  // Strategy 2: Relative to __dirname (works when file is not bundled)
  const dirnamePath = path.join(__dirname, '..', 'books');
  if (fs.existsSync(dirnamePath)) {
    console.log('[chapters.ts] Using __dirname path:', dirnamePath);
    return dirnamePath;
  }

  // Strategy 3: Hardcoded relative path
  const relativePath = path.resolve(process.cwd(), 'books');
  console.log('[chapters.ts] Using default path:', relativePath);
  return relativePath;
}

const booksDirectory = findBooksDirectory();

console.log('[chapters.ts] Final booksDirectory:', booksDirectory);
console.log('[chapters.ts] Books directory exists:', fs.existsSync(booksDirectory));

export interface ChapterMetadata {
  slug: string;
  title: string;
  order: number;
  filename: string;
}

export interface ChapterContent extends ChapterMetadata {
  content: string;
  htmlContent: string;
}

/**
 * Get all chapters for a specific book and language
 */
export function getAllChapters(bookSlug: string, lang: string): ChapterMetadata[] {
  const bookPath = path.join(booksDirectory, bookSlug, lang);
  
  console.log('[getAllChapters] bookPath:', bookPath);
  console.log('[getAllChapters] bookPath exists:', fs.existsSync(bookPath));
  
  if (!fs.existsSync(bookPath)) {
    console.warn('[getAllChapters] Path does not exist:', bookPath);
    return [];
  }

  const files = fs.readdirSync(bookPath)
    .filter(file => file.endsWith('.md'))
    .sort(); // Sort by filename for deterministic order

  console.log('[getAllChapters] Found files:', files);

  return files.map((filename, index) => {
    const filePath = path.join(bookPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract title from first heading or use filename
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : filename.replace('.md', '');
    
    // Extract order from filename (e.g., "01-序言.md" -> 1)
    const orderMatch = filename.match(/^(\d+)-/);
    const order = orderMatch ? parseInt(orderMatch[1]) : index + 1;

    return {
      slug: filename.replace('.md', ''),
      title,
      order,
      filename,
    };
  }).sort((a, b) => a.order - b.order);
}

/**
 * Get a specific chapter by slug
 */
export async function getChapterBySlug(
  bookSlug: string, 
  lang: string, 
  chapterSlug: string
): Promise<ChapterContent | null> {
  // Decode URL-encoded slug (e.g., "01-%E5%BA%8F%E8%A8%80" -> "01-序言")
  const decodedSlug = decodeURIComponent(chapterSlug);
  
  const bookPath = path.join(booksDirectory, bookSlug, lang);
  
  // Try multiple possible filenames
  const possibleFiles = [
    `${decodedSlug}.md`,
    `${chapterSlug}.md`,
    `${decodedSlug}.MD`,
    `${chapterSlug}.MD`
  ];
  
  console.log('[getChapterBySlug] Looking for chapter:', chapterSlug);
  console.log('[getChapterBySlug] Decoded slug:', decodedSlug);
  
  let filePath = null;
  for (const filename of possibleFiles) {
    const testPath = path.join(bookPath, filename);
    if (fs.existsSync(testPath)) {
      filePath = testPath;
      console.log('[getChapterBySlug] Found file:', filename);
      break;
    }
  }
  
  if (!filePath) {
    console.warn('[getChapterBySlug] File does not exist. Tried:', possibleFiles);
    console.warn('[getChapterBySlug] In directory:', bookPath);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Parse markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const htmlContent = processedContent.toString();

  // Extract title
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : decodedSlug;

  // Extract order from filename
  const orderMatch = path.basename(filePath).match(/^(\d+)-/);
  const order = orderMatch ? parseInt(orderMatch[1]) : 0;

  return {
    slug: decodedSlug,
    title,
    order,
    filename: path.basename(filePath),
    content,
    htmlContent,
  };
}

/**
 * Get previous and next chapters for navigation
 */
export function getChapterNavigation(
  bookSlug: string,
  lang: string,
  currentSlug: string
): { prev: ChapterMetadata | null; next: ChapterMetadata | null } {
  const chapters = getAllChapters(bookSlug, lang);
  const currentIndex = chapters.findIndex(ch => ch.slug === currentSlug || ch.slug === decodeURIComponent(currentSlug));

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? chapters[currentIndex - 1] : null,
    next: currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null,
  };
}

/**
 * Check if a book exists
 */
export function bookExists(bookSlug: string): boolean {
  const bookPath = path.join(booksDirectory, bookSlug);
  return fs.existsSync(bookPath);
}

/**
 * Get available languages for a book
 */
export function getAvailableLanguages(bookSlug: string): string[] {
  const bookPath = path.join(booksDirectory, bookSlug);
  
  if (!fs.existsSync(bookPath)) {
    console.warn('[getAvailableLanguages] Book path does not exist:', bookPath);
    return [];
  }

  return fs.readdirSync(bookPath)
    .filter(file => {
      const filePath = path.join(bookPath, file);
      return fs.statSync(filePath).isDirectory();
    });
}
