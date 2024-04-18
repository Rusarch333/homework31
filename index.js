/*
  ЗАВДАННЯ №1
*/

console.log("TASK №1");

/**
 * Функція приймає два значеня і повертає більше значення, якщо значення одного типу, в усіх інших випадках повертає null.
 * Якщо два значення однакові - повертає перше значення.
 * @param {any} value1
 * @param {any} value2
 * @returns {any|null}
 */
const getMaxFromTwoParamsOrNull = function (value1, value2) {
  if (typeof value1 === typeof value2) {
    return value1 >= value2 ? value1 : value2;
  }
  return null;
};

console.log(getMaxFromTwoParamsOrNull(4, 2));
console.log(getMaxFromTwoParamsOrNull(3, 3));
console.log(getMaxFromTwoParamsOrNull(3, 5));
console.log(getMaxFromTwoParamsOrNull("1", 2));

/*
  ЗАВДАННЯ №2
*/

console.log("TASK №2");

/**
 * Функція просить користувача ввести число і виводить повідомлення яке він число ввів: "додатнє", "нуль" або "від'ємне", або виводить повідомлення "це не число".
 * @returns {void}
 */
const getNumberSignOrZeroType = function () {
  const userInput = prompt("Введіть будь-ласка число:");

  // Якби не умова, що prompt має бути частиною функції, то змінну нижче можна було б зробити як окрему функцію
  const isUserInputHaveError =
    userInput === "" || userInput === null || Number.isNaN(Number(userInput));

  // Функція згідно умови виводить повідомлення, а не повертає значення, процедура із Pascal :)
  if (isUserInputHaveError) {
    alert("Це не число!");
  } else if (userInput > 0) {
    alert("Число додатнє!");
  } else if (userInput === 0) {
    alert("Число - нуль!");
  } else {
    alert("Число від'ємне!");
  }
};

console.log(getNumberSignOrZeroType());

/*
  ЗАВДАННЯ №3
*/

console.log("TASK №3");

/**
 * Функцію, яка приймає параметром число і перевіряє чи є це число дільником 100
 * @param {number} divisor
 * @param {number} DIVIDEND [DIVIDEND=100]
 * @returns {boolean}
 */
const checkDivisibilityByDivisor = function (divisor, DIVIDEND = 100) {
  return DIVIDEND % divisor === 0;
};

// Якщо передавати змінну від користувача, то можна було б теж створити перевірку isUserInputHaveError як було вище у вигляді окремої функції
console.log(checkDivisibilityByDivisor(25));
console.log(checkDivisibilityByDivisor(26));
console.log(checkDivisibilityByDivisor(100));
console.log(checkDivisibilityByDivisor(200));

/*
  ЗАВДАННЯ №4
*/

console.log("TASK №4");

/**
 * Функція, яка перевіряє можливість існування трикутника.
 * Трикутник існує тоді і тільки тоді, коли сума довжин будь-яких двох його сторін більша за третю.
 * @param {number} sideLength1 [sideLength1=3]
 * @param {number} sideLength2 [sideLength2=4]
 * @param {number} sideLength3 [sideLength3=5]
 * @returns {boolean}
 */
const checkIfTriangleExist = function (
  sideLength1 = 3,
  sideLength2 = 4,
  sideLength3 = 5
) {
  return (
    sideLength1 > 0 &&
    sideLength2 > 0 &&
    sideLength3 > 0 &&
    sideLength1 + sideLength2 > sideLength3 &&
    sideLength1 + sideLength3 > sideLength2 &&
    sideLength2 + sideLength3 > sideLength1
  );
};

// Якщо передавати змінну від користувача, то можна було б теж створити перевірку isUserInputHaveError як було вище у вигляді окремої функції
console.log(checkIfTriangleExist());
console.log(checkIfTriangleExist(-3, -4, -5));
console.log(checkIfTriangleExist(3, 0, 5));
console.log(checkIfTriangleExist(1, 2, 5));