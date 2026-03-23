import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_PATH = path.join(process.cwd(), 'src/content/projects');
const BLOG_PATH = path.join(process.cwd(), 'src/content/blog');

export type ProjectContent = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  date: string;
  content: string;
};

export type BlogContent = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
};

export async function getAllProjects(): Promise<ProjectContent[]> {
  if (!fs.existsSync(PROJECTS_PATH)) return [];
  
  const files = fs.readdirSync(PROJECTS_PATH);
  const projects = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(PROJECTS_PATH, file), 'utf8');
      const { data, content } = matter(source);
      return {
        ...data,
        slug: file.replace('.mdx', ''),
        content,
      } as ProjectContent;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectContent | null> {
  try {
    const fullPath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    
    const source = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(source);
    return {
      ...data,
      slug,
      content,
    } as ProjectContent;
  } catch (e) {
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogContent[]> {
  if (!fs.existsSync(BLOG_PATH)) return [];

  const files = fs.readdirSync(BLOG_PATH);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(BLOG_PATH, file), 'utf8');
      const { data, content } = matter(source);
      return {
        ...data,
        slug: file.replace('.mdx', ''),
        content,
      } as BlogContent;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogContent | null> {
  try {
    const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const source = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(source);
    return {
      ...data,
      slug,
      content,
    } as BlogContent;
  } catch (e) {
    return null;
  }
}
