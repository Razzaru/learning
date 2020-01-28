// Переменные
const test2 = 'test2';
let test = 'test';

// Именование переменных
const userName = 'Петя';
const carNumber = 'В 256 ВЛ';

// Типы данных

// Строки
const emptyString = ''; // false
const string = 'Петя';
const stringInDoubleQuotes = "Петя"; // равно предыдущему
const stringInBackticks = `Петя`;
const interpolatedString = `Крутой мужик ${carNumber}`;
const concatenatedString = 'Крутой мужик ' + string;

// Числа
const zero = 0; // false
const number = 25; // Целое число
const float = 25.5; // Число с плавающей точкой
const infinity = Infinity; // true
const nan = NaN; // true

// Булевы
const boolTrue = true;
const boolFalse = false;

// Значение, означающее отсутствие значения
const nothing = null; // false

// Значение, которое хранят необъявленные переменные
const amIDefined = undefined; // false

// Массив
// 0 1 2
const array = [12, 14];
// console.log(array[0]);
const array2 = [{name: 'Titanic', director: 'James Cameron'}];

// Объекты
// Важно! Ключи ТОЛЬКО строки.
const user = {
    age: 23,
    name: 'Вася',
    login: 'petya',
    favoriteMovies: [
        {
            name: 'Titanic',
            director: 'James Cameron'
        }
    ],
    parent: {
        name: 'Вася',
        parent: {
            name: 'Илья'
        }
    }
};

// console.log(user.favoriteMovies[0].director);

// Функции
function f() {
    console.log('Привет юзер!');

    return 'Выполнено!'
}

const result = f();

console.log(result);

const addHuiToUserName = (userName) => {
    return `Хуй ${userName} Хуй`;
};

const addHuiToUserNameWithoutReturn =
    (userName) => `Хуй ${userName} Хуй`;

const res = addHuiToUserName(user.name);
const res2 = addHuiToUserNameWithoutReturn(user.name);

console.log(res, res2);

