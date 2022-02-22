const http = require('http');
const router = require('./router');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4400;

const server = http.createServer(router);

server.listen(port, () => {
  console.log(`Server is listening on port ${port},host${host}  Ready to accept requests!`);
});
