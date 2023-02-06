import fs from 'fs';
import path from 'path'

// const filePath = '../mdnote/linux-file-api.md'

export default (filePath) => fs.readFile(filePath, 'utf-8', (error, content) => {

  if (error) {
    console.error(`Error reading file: ${error}`);
    return;
  }

  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  let match;

  while ((match = linkRegex.exec(content))) {
    console.log(match[0]);
    let linkUrl = match[2];

    linkUrl = linkUrl.replace(/_/g, '-').toLowerCase();

    content = content.replace(match[2], linkUrl);
  }

  fs.writeFile(filePath, content, 'utf-8', error => {
    if (error) {
      console.error(`Error writing file: ${error}`);
      return;
    }

    console.log(`File ${filePath} successfully updated`);
  });
});
