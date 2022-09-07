const getHtml = require('./html');
const parseHtml = require('./parse');

const formatTag = (tag) => {
  let checkedTag = tag;
  if (typeof tag === 'undefined') {
   checkedTag = 'li'; 
  }
  return checkedTag;
}

const scrapeAndParse = async (url, tag) => {
  let checkedTag = formatTag(tag);
  const decodedHtml = await getHtml(url);
  const parsedHtml = parseHtml(decodedHtml, checkedTag);
  return parsedHtml;
}

module.exports = {
  formatTag, 
  scrapeAndParse
};