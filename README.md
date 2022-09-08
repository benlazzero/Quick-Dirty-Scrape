<p align="center">
  <img src="https://github.com/benlazzero/Quick-Dirty-Scrape/blob/main/logo.png?raw=true">
</p>

------------------------------------
<<<<<<< HEAD
`https://www.npmjs.com/package/qd-scraper`
=======
>>>>>>> d1aa3321a93e300f7dd78000697726e9a9b746aa

For scraping website text data quick and dirty.

Proabaly not the most accurate scraper/parser one-liner, however it's very simple to use and most often returns useable results.

QDScraper boasts zero 3rd-party dependencies by making use of the nodejs https library. This package will most likely DOA.. 
However I will merge all pulls that pass tests, simplify the code, and add accuracy.

### NPM Installation

```bash
cd your-root-dir
npm install qd-scraper 
```

### Example

```javascript
const scraper = require('qd-scraper');

const scrapeSite = async() => {
  let ArrayOfData = await scraper('https://website.com/', 'div');
  return ArrayOfData;
}

console.log(scrapeSite()) // ['text from first div', 'text from second div'...]
```

### Behavior 
<<<<<<< HEAD

On success the scraper will return an array of strings containing the text inbetween the tag specified.

On failure the scraper will return an empty array.

If a tag is not specified the scraper will default to a <li> tag.
=======
>>>>>>> d1aa3321a93e300f7dd78000697726e9a9b746aa
