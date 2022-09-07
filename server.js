const express = require('express');
const qdscrape = require('./qdscrape/index');

const server = express();
const home = require('./routes/home');
const port = process.env.PORT || 3000;

server.use('/', (async(req, res, next) => {
  let test = await qdscrape.scrapeAndParse('https://agilemanifesto.org/', 'font');
  console.log(test);
  next()
}), home);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});