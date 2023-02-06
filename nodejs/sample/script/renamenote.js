import fs from 'fs';
import path from 'path'
import modUrlLink from './modifylinkurl.js'

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

          fs.rename(filePath, newFilePath, (error) => {

            if (error) {
              console.error(`Error renaming file: ${error}`);
            } else {
              console.log(`File renamed from ${file} to ${newFileName}`);
            }
          })
        }

      });

    });

  })
}

export default renameFilesInDirectory;