import fs from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import { html } from 'remark-html';
import matter from 'gray-matter';

const readMdFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(( file ) => {
    const filePath = join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      readMdFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const result = remark().use(html).processSync(content);
      fileList.push({
        id: file.replace(/\.md$/, ''),
        content: result.value,
      });
    }
  });
  return fileList;
};

export default (req, res) => {
  const data = readMdFiles(join(process.cwd(), 'posts'));
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};
