const replaceCharWithZ = (string, index) => {
  if(index > string.length-1) {
    return string;
  }
  return string.substring(0, index) + 'z' + string.substring(index+1);
}

const sortNumerical = (a,b) => {
  return a - b;
}

const getIndexes = (decodedHtml, tag) => {
  let tempHtml = decodedHtml;
  let arrayOfIndexes = [];
  let index = tempHtml.search(tag);
  while (index !== -1) {
    arrayOfIndexes.push(index);
    tempHtml = replaceCharWithZ(tempHtml, index)
    index = tempHtml.search(tag)
  }
  return arrayOfIndexes;
}

const getOpenIndexes = (decodedHtml, tag) => {
  let openTag = '<' + tag;
  let OpenTagIndexes = getIndexes(decodedHtml, openTag); 
  return OpenTagIndexes;
}

const getClosedIndexes = (decodedHtml, tag) => {
  let closedTag = '</' + tag;
  let ClosedTagIndexes = getIndexes(decodedHtml, closedTag); 
  return ClosedTagIndexes;
}

const sortIndexes = (decodedHtml, tag) => {
  let OpenIndexes = getOpenIndexes(decodedHtml, tag)
  let ClosedIndexes = getClosedIndexes(decodedHtml, tag)
  let arrayOfIndexes = OpenIndexes.concat(ClosedIndexes); 
  arrayOfIndexes = arrayOfIndexes.sort(sortNumerical);
  return arrayOfIndexes;
}

const getStringsBetweenIndexes = (decodedHtml, tag) => {
  let arrayOfIndexes = sortIndexes(decodedHtml, tag);
  let arrayOfStrings = [];
  for (let i = 0; i < arrayOfIndexes.length; i++) {
    let tempString = ''
    tempString = decodedHtml.substring(arrayOfIndexes[i], arrayOfIndexes[i+1])
    arrayOfStrings.push(tempString);
  }
  return arrayOfStrings;
}

const cleanUpStrings = (decodedHtml, tag) => {
  let arrayOfStrings = getStringsBetweenIndexes(decodedHtml, tag);
  let parsedStrings = [];
  let removeTags = /<.*?>/g;
  let removeNewlines = /\r?\n|\r/g;
  let removeSpaces = /[ ]{2,}/g;
  
  for(let i = 0; i < arrayOfStrings.length; i++) {
    let currentString = arrayOfStrings[i].replaceAll(removeTags, '');  
    currentString = currentString.replaceAll(removeNewlines, '');
    currentString = currentString.replaceAll(removeSpaces, '');
    parsedStrings.push(currentString);
  }
  
  parsedStrings = parsedStrings.map(element => {
    return element.trim();
  })

  parsedStrings = parsedStrings.filter(tag => tag.length > 1);
  return parsedStrings;
}

module.exports = cleanUpStrings;