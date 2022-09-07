const html = require('../qdscrape/html');
const goodurl = 'https://agilemanifesto.org/';

test('pass in bad url to return empty string', async() => {
  expect(await html('badurl')).toBe("");
});

//NOTE: test requires a successful get request @ goodurl to pass
test('pass in good url to return decoded html', async() => {
  expect(await html(goodurl)).toContain('html');
});