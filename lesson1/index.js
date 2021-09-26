const colors = require('colors');

const getPrimeNumberInRange = (min, max) => {
  let primeNumbers = [];

  for (let i = min; i <= max; i++) {
    let isPrimeNumber = false;

    if (i === 2) {
      primeNumbers.push(2);
    }

    for (let j = 2; j < i; j++ ) {
      if (i % j === 0) {
        isPrimeNumber = false;
        break;
      }
      isPrimeNumber = true;
    }

    if (isPrimeNumber) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
};

const getFormatedData = array => {
  const formatedArray = [];
  let count = 0;

  for (let i = 0; (i + count) <= array.length; i++) {
    let arr = [];
    for (let j = 0; j < 3; j++){
      if (array[j + count] !== undefined) {
        arr.push(array[j + count]);
      }
    }
    count += 3;
    formatedArray.push(arr);
  }

  return formatedArray;
};

const getColoredPrimeNumbers = () => {
  const min = +process.argv[2];
  const max = +process.argv[3];

  if (isNaN(min) || isNaN(max)) {
    console.log(colors.red('Необходимо указать число'));
    return;
  }

  const data = getPrimeNumberInRange(min, max);

  if (!data.length) {
    console.log(colors.red('В заданном диапозоне простых чисел нет'));
    return;
  }

  const result = getFormatedData(data);

  result.forEach(item => {
    console.log(colors.green(item[0]));
    item[1] ? console.log(colors.yellow(item[1])) : null;
    item[2] ? console.log(colors.red(item[2] ?? '')) : null;
  });
};

getColoredPrimeNumbers();
