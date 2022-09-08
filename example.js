const qdscrape = require('qd-scraper');

const scrape = async() => {
  let test = await qdscrape('https://agilemanifesto.org/', 'font');
  console.log(test);
}

scrape();