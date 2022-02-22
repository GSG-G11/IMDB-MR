const fs = require('fs');
const path = require('path');

const corentType = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.json': 'application/json',
  '.jpg': 'image/jpg',
  '.png': 'image/png',
};
const publicHandler = (url, response) => {
  const filePath = path.join(__dirname, '..', '..', url);
  const extention = path.extname(url);
  console.log(filePath);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500);
      response.end('Server Error');
    } else {
      response.writeHead(200, { 'Content-Type': corentType[extention] });
      response.end(file);
    }
  });
};
module.exports = publicHandler;
