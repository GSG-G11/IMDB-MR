const publicHandler = require('./handler/handlerPublic');
const handlerAPI = require('./handler/handlerAPI.js');
const dis = require('./dis.json');

const router = (request, response) => {
  const endpoint = request.url;
  const method = request.method;
  if (endpoint === '/') {
    publicHandler('/public/index.html', response);
  } else if (endpoint === '/public/main.css') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/public/dom.js') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/public/IMDB-MR_free-file.png') {
    publicHandler(endpoint, response);
  } else if (endpoint === '/search' && method === 'POST') {
    const obj = JSON.parse(JSON.stringify(Object.values(dis)));
    let val = '';
    request.on('data', (chunk) => {
      val += chunk;
    });
    let arr = [];
    request.on('end', () => {
      arr = obj.filter((e) => {
        return e.name.toLowerCase().includes(val.toLowerCase());
      });
      response.end(JSON.stringify(arr));
    });
  } else if (endpoint === '/searchBtn' && method === 'POST') {
    let data = '';
    request.on('data', (chunk) => {
      data += chunk;
    });
    request.on('end', () => {
      handlerAPI(response, data);
    });
  } else if (endpoint === '/public/api.js') {
    publicHandler(endpoint, response);
  } else {
    response.writeHead(404);
    response.end('Page not found');
  }
};
module.exports = router;
