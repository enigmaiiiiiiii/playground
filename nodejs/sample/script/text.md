<<<<<<<< HEAD:nodejs/sample/script/text.md
refactor this with use promise

import { readdir, stat as _stat, rename, readFile, writeFile } from "fs";
import { join } from "path";
import { exec } from "child_process";

const notePath = 'D:/MyGitHubRepo/playground/nodejs/sample/mdnote';

function modifyLinks(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw err;
    }

    for (const file of files) {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          throw err;
        }

        if (stat.isDirectory()) {
          modifyLinks(filePath);
        } else if (file.endsWith(".md")) {
          fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
              throw err;
            }
            const newData = data.replace(
              /\[(.*?)\]\((.*?)\)/g,
              (match, p1, p2) => {
                return `[${p1}](${p2.replace(/_/g, "-").toLowerCase()})`;
              }
            );
            fs.writeFile(filePath, newData, "utf-8", (err) => {
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
          rename(oldPath, newPath, (err) => {
            if (err) {
              throw err;
            }
            exec(`git mv ${oldPath} ${newPath}`, (err) => {
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

(function script() {
  recursiveRename(notePath);
  modifyLinks(notePath);
})()

========
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (message, receiver) {
        console.log('Email sent to ' + receiver + ' with message: ' + message);
    };
    return EmailService;
}());
var emailService = new EmailService();
emailService.sendEmail('Hello World', 'receiver@example.com');
>>>>>>>> ls:nodejs/sample/script/main.js
