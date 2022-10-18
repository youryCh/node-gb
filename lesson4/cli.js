#!/c/PROGRA~1/nodejs/node
const fs = require('fs');
// const fs = require('fs/promises');
const path = require('path');
// const yargs = require('yargs');
// const readline = require('readline');
const inquirer = require('inquirer');

// const options = yargs.usage('Usage: -p <path> to file').options('p', {
//   alias: 'path',
//   describe: 'Path to file',
//   type: 'string',
//   demandOption: true,
// }).argv;

// const [, , pathToTargetFile] = process.argv;
// const accessLog = path.join(__dirname, options.path);

// fs.readFile(accessLog, 'utf-8', (err, data) => {
//   console.log(data);
// });

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Enter path to the file: ', (path) => {
//   console.log(path);
//   rl.close();
// });

// const question = async (query) =>
//   new Promise((resolve) => rl.question(query, resolve));

// (async () => {
//   const pathToFile = await question('Enter path to file: ');
//   const fileCode = await question('Enter encode: ');
//   const filePath = path.join(__dirname, pathToFile);
//   const data = await fs.readFile(filePath, fileCode);
//   console.log(data);

//   rl.close();
// })();

const list = fs
  .readdirSync(process.cwd())
  .filter((item) => fs.lstatSync(item).isFile());

inquirer
  .prompt([
    {
      name: 'fileName',
      type: 'list',
      message: 'Choose a file to read',
      choices: list,
    },
  ])
  .then((answer) => answer.fileName)
  .then((fileName) => {
    const fullPath = path.join(__dirname, fileName);
    const data = fs.readFileSync(fullPath, 'utf-8');
    console.log(data);
  });
