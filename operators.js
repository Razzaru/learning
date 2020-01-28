// Унарные (+, -)
const a = -1;
const b = +(-1);
const c = +'1'; // РАВНОЗНАЧНЫ!!!
const d = Number('1'); // РАВНОЗНАЧНЫ!!!

// Бинарные

// Бинарный +
const sum = 2 + 2; // 4
const sum2 = '2' + 2; // 22
const sum3 = 2 + '2'; // 4

// Бинарный -
const diff = 2 - 2; // 0
const diff2 = '2' - '2'; // 0
const diff3 = 296 - 'test'; // NaN

// Бинарные * и / (то же самое что с вычитаением)
const mul = 2 * 2; // 4
const div = 2 / 2; // 1

// Получение остатка от деления (для определение четных чисел)
const perc = 2 % 2; // 0
const perc2 = 5 % 2; // 1

const ar = [1, 2, 3];

// Возведение в степень
const pow = 2 ** 2; // 4

// Оператор присвоения
const pow2 = 2 ** 2; // =

const complexMath = 2 + 2 * 2; // 6

// Increment operator
let num = 1;
const numInc = num + 1; // Increment
++num; // Меняет исходное значение (префиксная форма)
num++; // Меняет исходное значение (постфиксная форма)

// Decrement operator

const num2 = 1;
const numDec = num - 1; // Decrement
--num; // Меняет исходное значение (префиксная форма)
num--; // Меняет исходное значение (постфиксная форма)

// Операторы сравнения (возвращают boolean)
const bigger = 2 > 3;
const less = 2 < 2;

const biggerOrEqual = 2 >= 3;
const lessOrEqual = 2 <= 2;

const notStrictEqual = 2 == '2';
const strictEqual = 2 === '2'; // Используем только!! это вот

const notStrictNotEqual = 2 != '2';
const strictNotEqual = 2 !== '2';

const notThe = !bigger;

const and = bigger && less; // Логическое И, все операнды должны быть истинны
const or = bigger || less; // Логическое ИЛИ, все операнды должны быть истинны

// Пример НЕ
const user = {
    name: 'Петя',
    isEmailConfirmed: false,
    email: null,
    phone: '8991141337',
    age: 30
};

// function sendConfirmation(user) {
//     console.log('Отправлено подтверждение пользователю' + user.name);
// }
//
// // Условия
//
// // Если email не подтвержден
// if (!user.isEmailConfirmed && (user.email || user.phone)) {
//     sendConfirmation(user);
// }

if (user.isEmailConfirmed) {
    console.log('Привет, ' + user.name + '!');
} else {
    console.log('Пока, ' + user.name + '!');
}

if (user.age > 10) {
    console.log('ебать ты шкет')
} else if (user.age > 30) {
    console.log('ебать ты бумер')
} else {
    console.log('ебать ты старикан')
}

switch (user.age) {
    case 30:
        console.log('тебе 30');
        break;
    case 40:
        console.log('тебе 40');
        break;
    default:
        console.log('ебать здарова');
        break;
}

const ternary = user.age > 30 ? 'Здоровяк' : 'Пездюк';

let ternary2 = null;

if (user.age > 30) {
    ternary2 = 'Здоровяк'
} else {
    ternary2 = 'Пездюк'
}
