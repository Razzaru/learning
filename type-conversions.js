// Преобразования типов
// ТОЛЬКО простые типы

const string = '';

const number = 0;

const boolean = true;

const numberFromString = Number(string);//Number(string);
const numberFromBoolean = Number(boolean);//Number(string);

// console.log(numberFromString, typeof numberFromString);
// console.log(numberFromBoolean, typeof numberFromBoolean);

const booleanFromString = Boolean(string);
const booleanFromNumber = Boolean(number);

// console.log(booleanFromString, typeof booleanFromString);
// console.log(booleanFromNumber, typeof booleanFromNumber);

const stringFromNumber = String(number);
const stringFromBoolean = String(boolean);

// console.log(stringFromNumber, typeof stringFromNumber);
// console.log(stringFromBoolean, typeof stringFromBoolean);

const isThatNumber = Number('test');

console.log(isThatNumber, typeof isThatNumber);
