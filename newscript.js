const fs = require('fs');
const { execSync } = require('child_process');

fs.renameSync("b.js", "c.js")

try {
  const result = execSync(`git mv b.js c.js`)
} catch (error) {
  console.error(`Error: ${error.stderr.toString()}`);
}
