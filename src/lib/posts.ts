import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content');

export async function getSortedPostsData() {
  // Get file names under /src/content
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug
    return {
      slug,
      contentHtml,
      ...matterResult.data,
    };
  }));

  // Sort posts by date
  //return allPostsData.sort(({ date: a }, { date: b }) => {
  //  if (a < b) {
  //    return 1;
  //  } else if (a > b) {
  //    return -1;
  //  } else {
  //    return 0;
  //  }
  //});
}