const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  //   res.setHeader('number', 123);
  //   res.writeHead(200, 'zaebis');
  //   res.write('Server start with status "zaebis"!');
  //   res.end();

  // URL
  //   if (req.url === '/user') {
  //     res.write('User founded');
  //     res.end();
  //   } else {
  //     res.write('User not found');
  //     res.end();
  //   }

  // Method
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   //   res.setHeader('Access-Control-Allow-Methods', '*');

  //   if (req.method === 'GET') {
  //     res.write('Method GET is OK');
  //     res.end();
  //   } else if (req.method === 'POST') {
  //     // res.writeHead(405);
  //     res.write('Method not allowed');
  //     res.end();
  //   }

  //   res.end();
  //   const { query } = url.parse(req.url, true);
  //   res.end(JSON.stringify(query));

  if (req.method === 'POST') {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      const parsedData = JSON.parse(data);
      console.log({ parsedData, data });
      res.setHeader('Content-type', 'Application/JSON');
      res.end(data);
    });
  } else {
    res.end();
  }
});

server.listen(8888);
