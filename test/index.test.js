const index = require('../qdscrape/index');
const goodurl = 'https://agilemanifesto.org/';

test('formatTag returns li if empty param', () => {
  expect(index.formatTag()).toBe('li'); 
});

test('formatTag returns same if passed string param', () => {
  expect(index.formatTag('div')).toBe('div');
})

test('scrapeAndParse returns empty array if bad url', async() => {
  expect(await index.scrapeAndParse('badurl', 'li')).toStrictEqual([]);
});

//NOTE: test requires a successful get request @ goodurl to pass
test('scrapeAndParse with good url returns array greater than zero', async() => {
  let testArray = await index.scrapeAndParse(goodurl, 'font');
  let arrayGreaterThanZero = false;
  if(testArray.length > 0) {
    arrayGreaterThanZero = true;
  }
  expect(arrayGreaterThanZero).toBeTruthy();
})