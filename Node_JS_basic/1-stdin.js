#!/usr/bin/env node
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  data = data.toString().trim();
  console.log(`Your name is: ${data}`);
  process.on('SIGINT', () => {
    console.log('\nThis important software is now closing');
    process.exit();
  });
});
