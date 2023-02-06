const fs = require('fs');
const { execSync } = require('child_process');


execSync(`git mv c.js a.js`);
