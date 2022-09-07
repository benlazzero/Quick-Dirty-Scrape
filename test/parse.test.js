const parseRawHtml = require('../qdscrape/parse');
const fs = require('fs');
const path = require('path');

const goodTag = 'font';

test('parses raw html and returns array of expected length', () => {
  const testpage = path.join(__dirname, './', 'testpage.txt');
  let decodedHtml = fs.readFileSync(testpage, 'utf8');
  let testArray = parseRawHtml(decodedHtml, goodTag);  
  let testArrayLength = testArray.length;
  expect(testArrayLength).toBe(18);
})

