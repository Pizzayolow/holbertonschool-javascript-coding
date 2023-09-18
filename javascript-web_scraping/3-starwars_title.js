#!/usr/bin/node
const request = require('request');

const id = process.argv[2];
const urlId = 'https://swapi-api.hbtn.io/api/films/';
const urlUpt = urlId + id;

request(urlUpt, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
