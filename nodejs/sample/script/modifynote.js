import fs from 'fs';
import path from 'path'

const noteDirPath = path.join(process.cwd(), 'mdnote');
const notefiles = fs.readdirSync(noteDirPath);

const oneFile = path.join(process.cwd(), 'mdnote', 'Linux_Account_Command.md');

console.log(oneFile)
console.log(oneFile.replaceAll('_', '-'));

// fs.rename(oneFile, oneFile.replaceAll('_', '-'));
fs.rename(oneFile, oneFile.replaceAll('_', '-'), (err) => {
  if (err) {
    throw err;
  }
});

// notefiles.forEach(
//   (file) => {
//     fs.rename(
//       path.join(noteDirPath, file),
//       path.join(noteDirPath, file.replace('_', '-'))
//     )
//   }
// );

