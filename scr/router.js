const publicHandler = require('./handler/handlerPublic');
const searchHandler = require('./handler/handlerSearch');
const dis = require('./dis.json');

const router = (request, response) => {
  const endpoint = request.url;
  const method = request.method;
  if (endpoint === '/') {
    publicHandler('/public/index.html', response);
  } else if (endpoint === '/public/main.css') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/dom.js') {
    publicHandler(endpoint, response);
    publicHandler('/public/dom.js', response);
  } else if (endpoint === '/public/dom.js') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/search' && method === 'GET') {
    const obj = JSON.stringify(Object.values(dis));
    response.end(obj);
  } else if (endpoint === '/scr/api.js') {
    publicHandler(endpoint, response);
  } else {
    response.writeHead(404);
    response.end('Page not found');
  }
};
module.exports = router;
