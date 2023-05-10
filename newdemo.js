const fs = require('fs');
const { execSync } = require('child_process');

// Rename the file
fs.renameSync('demo.js', 'newdemo.js');

// Tell Git about the rename
execSync('git mv demo.js newdemo.js');

console.log("hello")
