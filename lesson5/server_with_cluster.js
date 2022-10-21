const cluster = require('cluster');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

if (cluster.isMaster) {
  console.log(`Master #${process.pid} is running`);

  for (let i = 0; i < os.cpus().length; i++) {
    console.log(`Fork process #${i}`);
    cluster.fork();
  }
} else {
  const indexPath = path.join(__dirname, './index.html');
  const readStream = fs.createReadStream(indexPath);

  const server = http.createServer((req, res) => {
    // console.log(`Worker #${process.pid} resive request`);
    // res.writeHead(200, {
    //   'Content-Type': 'text/html',
    // });

    // readStream.pipe(res);
    setTimeout(() => {
      console.log(`Worker #${process.pid} resive request`);
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });

      readStream.pipe(res);
    }, 7000);
  });

  console.log(`Worker #${process.pid} is running`);
  server.listen(8888);
}
