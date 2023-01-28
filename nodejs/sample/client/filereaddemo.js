// import fetch from 'node-fetch';
// import fs from 'fs';

// fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     fs.writeFile('./test.json', JSON.stringify(json), (err) => {
//       if (err) {
//         throw new Error('Something went wrong.')
//       }
//       console.log('JSON written to file. Contents:');
//       console.log(fs.readFileSync('test.json', 'utf-8'))
//     })
//   });