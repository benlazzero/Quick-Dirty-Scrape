<p align="center">
  <img src="https://github.com/benlazzero/Quick-Dirty-Scrape/blob/main/logo.png?raw=true">
</p>

------------------------------------
`https://www.npmjs.com/package/qd-scraper`

For scraping website text data quick and dirty.

Proabaly not the most accurate scraper/parser one-liner, however it's very simple to use and most often returns useable results.

QDScraper boasts zero 3rd-party dependencies by making use of the nodejs https library. This package will most likely DOA.. 
However I will merge all pulls that pass tests, simplify the code, and add accuracy.

### NPM Installation
`WARNING: NODE >= 16.17.0` 

```bash
cd your-root-dir
npm install qd-scraper 
```

### Example

```javascript
var qdScraper = require("qd-scraper")

const scrapeSite = async() => {
  let ArrayOfData = await qdScraper('https://website.com/', 'div');
  console.log(ArrayOfData);
}
 
scrapeSite(); // ['text from first div', 'text from second div'...]
```

### Behavior

`NOTE: Returns a promise`

On success the scraper will return an array of strings containing the text in between the tag specified.

On failure the scraper will return an empty array. Could be the case when the url is bad or tag is not found.

If a tag is not specified as a parameter the scraper will default to a `<li>` tag.

### Build 

```bash
git clone https://github.com/benlazzero/Quick-Dirty-Scrape
cd Quick-Dirty-Scrape
npm install
```

Running tests with Jest
```bash
npm test 
```

Running the example file (uses nodemon to restart on saves)
```bash
npm start
```
