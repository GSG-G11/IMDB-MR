const dis = require('../dis.json');

const searchHandler = (response) => {
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify(dis));
};

module.exports = searchHandler;
