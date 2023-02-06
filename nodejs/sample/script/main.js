import path from 'path'; 
import fs from 'fs';
import renameFilesInDirectory  from './renamenote.js';

const noteDirPath = path.join(path.dirname(process.cwd()), 'mdnote');

renameFilesInDirectory(noteDirPath);
