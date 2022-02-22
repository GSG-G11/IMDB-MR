// const fs = require('fs');
// const path = require('path');
// const querystring = require('querystring');
const publicHandler = require('./handler/handlerPublic');
const searchHandler = require('./handler/handlerSearch');

const router = (request, response) => {
  const endpoint = request.url;
  // const method = request.method;
  if (endpoint === '/') {
    publicHandler('/public/index.html', response);
  } else if (endpoint === '/main.css') {
    publicHandler('/public/main.css', response);
  } else if (endpoint === '/dom.js') {
    publicHandler('/public/dom.js', response);
  } else if (endpoint === '/api.js') {
    publicHandler('/API/api.js', response);
  } else if (endpoint === '/scr/dis') {
    publicHandler('/scr/dis.json', response);
  } else if (endpoint === '/search') {
    searchHandler(response);
  } else {
    response.writeHead(404);
    response.end('Page not found');
  }
};
module.exports = router;
