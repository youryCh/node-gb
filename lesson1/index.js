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

const getColoredPrimeNumbers = () => {
  const min = process.argv[2];
  const max = process.argv[3];
  const result = getPrimeNumberInRange(min, max);

  if (!result.length) {
    console.log(colors.red('В заданном диапозоне простых чисел нет'));
    return;
  }

  console.log(result)  //как светофором раскарасить хз
}

getColoredPrimeNumbers();
