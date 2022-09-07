const https = require('node:https');

const getHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (request) => {
      let decodedHTML = '';
      
      request.on('data', (chunk)=> {
        decodedHTML += chunk;
      })

      request.on('end', () => {
        resolve(decodedHTML);
      })

    }).on('error', ()=> {reject()})
  }).catch(() => {
    return '';
  })
};

module.exports = getHtml;