#!/usr/bin/node
const request = require('request');

const url = process.argv[2];
let count = 0;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const bodyParsed = JSON.parse(body).results;
    for (let i = 0; i < bodyParsed.length; i++) {
      for (const cle in bodyParsed[i]) {
        if (cle === 'characters') {
          const characters = bodyParsed[i][cle];
          for (let j = 0; j < characters.length; j++) {
            if (characters[j].includes('18')) {
              count += 1;
            }
          }
        }
      }
    }
  }
  console.log(count);
});
