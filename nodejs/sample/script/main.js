import { readdir, stat as _stat, rename, readFile, writeFile } from "fs";
import { join } from "path";
import { exec } from "child_process";

const notePath = 'D:/MyGitHubRepo/playground/nodejs/sample/mdnote';

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
          rename(oldPath, newPath, (err) => {
            if (err) {
              throw err;
            }
            exec(`git mv ${oldPath} ${newPath}`, (err) => {
              if (err) {
                throw err;
              }
            });
            readFile(newPath, "utf-8", (err, data) => {
              if (err) {
                throw err;
              }
              const newData = data.replace(
                /\[([\w ]+)\]\(([\w_]+\.md)\)/g,
                (match, p1, p2) => {
                  return `[${p1}](${p2.replace(/_/g, "-").toLowerCase()})`;
                }
              );
              writeFile(newPath, newData, "utf-8", (err) => {
                if (err) {
                  throw err;
                }
              });
            });
          });
        }
      });
    }
  });
}

recursiveRename(notePath);
