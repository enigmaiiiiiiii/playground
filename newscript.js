const fs = require('fs');
const { execSync } = require('child_process');

fs.renameSync("c.js", "a.js")

const result = execSync(`git mv c.js a.js`)
