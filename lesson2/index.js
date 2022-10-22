const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30;
const SECONDS_IN_YEAR = SECONDS_IN_MONTH * 12;

/**
 * Создаём таймеры с полученными из консоли аргументами
 */
const run = () => {
  const hour = +process.argv[2];
  const day = +process.argv[3];
  const month = +process.argv[4];
  const year = +process.argv[5];

  if (!isNaN(hour)) {
    setTimer(hour, SECONDS_IN_HOUR);
  }

  if (!isNaN(day)) {
    setTimer(day, SECONDS_IN_DAY);
  }

  if (!isNaN(month)) {
    setTimer(month, SECONDS_IN_MONTH);
  }

  if (!isNaN(year)) {
    setTimer(year, SECONDS_IN_YEAR);
  }
};

/**
 * Устанавливает таймер
 * @param {number} count кодичество часов | дней | месяцев | лет
 * @param {number} index количество секунд в count
 */
const setTimer = (count, index) => {
  let total = count * index;
  let alias;

  switch (index) {
    case SECONDS_IN_HOUR:
      alias = 'hour: ';
      break;

    case SECONDS_IN_DAY:
      alias = 'day: ';
      break;

    case SECONDS_IN_MONTH:
      alias = 'month: ';
      break;

    case SECONDS_IN_YEAR:
      alias = 'year: ';
  }

  const handler = () => {
    if (total === 0) {
      clearInterval(timer);
      console.log('Time is over');
    }

    console.log(alias, Math.round(total / index));
    return total -= 1;
  };

  const timer = setInterval(handler, 1000);
};

run();
