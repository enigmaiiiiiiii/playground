import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

const noteDirPath = path.join(path.dirname(process.cwd()), 'mdnote');

function renameFilesInDirectory(directoryPath) {

  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      console.log(`Error reading directory: ${error}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (error, stats) => {

        if (error) {
          console.error(`Error stating file: ${error}`);
        }

        if (stats.isDirectory()) {
          renameFilesInDirectory(filePath);
        } else if (path.extname(file) === '.md') {
          modUrlLink(filePath);
          const newFileName = file.replace(/_/g, '-').toLowerCase();
          const newFilePath = path.join(directoryPath, newFileName);

          try {
            execSync(`git mv ${filePath} ${newFilePath}`)
            console.log(`File renamed from ${file} to ${newFileName}`);
          } catch (e) {
            console.error(`Error renaming file: ${file}`);
          }
        }

      });

    });

  })
}

function modUrlLink(filePath) {
  fs.readFile(filePath, 'utf-8', (error, content) => {

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

}

renameFilesInDirectory(noteDirPath);
