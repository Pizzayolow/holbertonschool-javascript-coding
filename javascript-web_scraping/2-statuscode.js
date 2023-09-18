#!/usr/bin/node
const fetch = require('node-fetch');
const url = process.argv[2];

fetch(url)
  .then(response => {
    if (response.ok) {
      console.log(`code: ${response.status}`);
    } else {
      console.log(`code: ${response.status}`);
    }
  });
