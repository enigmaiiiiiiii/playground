const fs = require('fs');
const { execSync } = require('child_process');

execSync(`git mv b.js c.js`);
