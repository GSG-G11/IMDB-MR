const https = require('https');

const handlerAPI = (res, content) => {
  https.get(
    `https://imdb-api.com/en/API/Search/k_5v7i5b9p/${content}`,
    (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        res.end(JSON.stringify(data));
      });
    }
  );
};

module.exports = handlerAPI;
