
const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');
const { remark }  = require('remark');

const file = path.join(process.cwd(), 'posts', 'dotnet-cli.md');

const content = remark().use(html).process(file);

console.log(content);


