convert this code to synchronous version

import fs from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import { html } from 'remark-html';
import matter from 'gray-matter';

const readMdFiles = async (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(async ( file ) => {
    const filePath = join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      readMdFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      const result = await remark().use(html).process(fs.readFileSync(filePath, 'utf8'));
      fileList.push({
        id: file.replace(/\.md$/, ''),
        content: result.value,
      });
    }
  });
  return fileList;
};

export default async (req, res) => {
  const data = await readMdFiles(join(process.cwd(), 'posts'));
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};
