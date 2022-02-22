const publicHandler = require('./handler/handlerPublic');

const router = (request, response) => {
  const endpoint = request.url;

  if (endpoint === '/') {
    publicHandler('/public/index.html', response);
  } else if (endpoint === '/main.css') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/dom.js') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/scr/dis') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/search') {
    // searchHandler('/scr/dis.json', response);
  } else if (endpoint === '/public/dom.js') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/scr/api.js') {
    publicHandler(endpoint, response);
  } else {
    response.writeHead(404);
    response.end('Page not found');
  }
};
module.exports = router;
