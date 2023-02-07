import { readdir, stat as _stat, readFile, writeFile } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const notePath = 'D:/MyGitHubRepo/playground/nodejs/sample/mdnote';

function modifyLinks(dir) {
  readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }

    for (const file of files) {
      const filePath = join(dir, file);

      _stat(filePath, (err, stat) => {
        if (err) {
          throw err;
        }

        if (stat.isDirectory()) {
          modifyLinks(filePath);
        } else if (file.endsWith(".md")) {
          readFile(filePath, "utf-8", (err, data) => {
            if (err) {
              throw err;
            }
            const newData = data.replace(
              /\[(.*?)\]\((.*?)\)/g,
              (match, p1, p2) => {
                return `[${p1}](${p2.replace(/_/g, "-").toLowerCase()})`;
              }
            );
            writeFile(filePath, newData, "utf-8", (err) => {
              if (err) {
                throw err;
              }
            });
          });
        }
      });
    }
  });
}

function recursiveRename(dir) {
  readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }

    for (const file of files) {
      const oldPath = join(dir, file);
      const newPath = join(dir, file.replace(/_/g, "-").toLowerCase());

      _stat(oldPath, (err, stat) => {
        if (err) {
          throw err;
        }

        if (stat.isDirectory()) {
          recursiveRename(oldPath);
        } else if (file.endsWith(".md")) {
          try {
            execSync(`git mv ${oldPath} ${newPath}`);
          } catch (error) {

          }
        }
      });
    }
  });

}

// recursiveRename(notePath);
modifyLinks(notePath);