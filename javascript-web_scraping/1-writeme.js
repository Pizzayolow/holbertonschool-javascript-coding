#!/usr/bin/node

const fs = require('fs');
const arg = process.argv[2];
const secondArg = process.argv[3];

fs.writeFile(arg, secondArg, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
