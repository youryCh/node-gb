const fs = require('fs');
const fsPromises = require('fs/promises');
const ACCESS_LOG = './access.log';

// Синхронное чтение файла.
// try {
//   const data = fs.readFileSync(ACCESS_LOG, {
//     // encoding: 'utf-8'
//   });
//   console.log(data.toString());
// } catch (error) {
//   console.log(error);
// }

// Асинхронное чтение файла.
// fs.readFile(ACCESS_LOG, 'utf-8', (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// Чтение файла через Promise.
fsPromises.readFile(ACCESS_LOG, 'utf-8').then(console.log).catch(console.log);
