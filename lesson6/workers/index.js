const worker_threads = require('worker_threads');

const generatePassword = (data) =>
  new Promise((res, rej) => {
    const worker = new worker_threads.Worker('./worker.js', {
      workerData: data,
    });

    worker.on('message', res);
    worker.on('error', rej);
  });

(async () => {
  const passLength = 16;
  const password = await generatePassword(passLength);
  console.log(password);
})();
