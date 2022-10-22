const socket = require('socket.io');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const indexPath = path.join(__dirname, './index.html');
  const readStream = fs.createReadStream(indexPath);
  readStream.pipe(res);
  // Second variant
  //   const indexFile = fs.readFileSync(indexPath);
  //   res.end(indexFile);
});

const io = socket(server);

io.on('connection', (client) => {
  console.log('Connected!');

  client.on('client-message', ({ message }) => {
    // console.log(data);
    const data = {
      message: message.toUpperCase(),
    };

    client.broadcast.emit('server-message', data);
    client.emit('server-message', data);
  });
});

server.listen(8888);
