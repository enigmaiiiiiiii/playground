const fs = require('fs');
const { execSync } = require('child_process');

fs.renameSync("a.js", "b.js");

const result = execSync(`git mv a.js b.js`);
