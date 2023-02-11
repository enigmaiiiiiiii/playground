import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsMetaData() {
  return getMdFileInfoInDir(postsDirectory);
}

export function getAllPostIds() {
  return getMdFileInfoInDir(postsDirectory).map(({ id }) => id);
}


export async function getPostData(id) {
  console.log(`function getPostData called`);
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

export function getMdFileInfoInDir(dir) {
  const files = fs.readdirSync(dir);
  const data = [];
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      data.push( ...getMdFileInfoInDir(filePath) );
    } else if (path.extname(file) === '.md') {
      data.push({
        id: file.replace(/\.md$/g, ''),
        mDate: fs.statSync(filePath).mtime.toLocaleString()
      });
    }
  });

  return data;
}