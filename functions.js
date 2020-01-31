// Функции

// Объявление функции

// НЕ ЯВЛЯЕТСЯ ВЫЗОВОМ ФУНКЦИИ
function sumTwoNumbers(firstNumber = 5, secondNumber = 5) {
    return firstNumber + secondNumber;
}

// Присваивание анонимной функции в переменную
const subTwoNumbers = function (firstNumber = 5, secondNumber = 5) {
    return firstNumber - secondNumber;
};

const mulTwoNumbers = (firstNumber = 5, secondNumber = 5) => {
    return firstNumber * secondNumber;
};

const divTwoNumbers = (firstNumber = 5, secondNumber = 5) => firstNumber / secondNumber;

// console.log(sumTwoNumbers(), subTwoNumbers(), mulTwoNumbers(), divTwoNumbers());


// console.log(subTwoNumbers(8, 6));

// const sum = sumTwoNumbers(8);
//
// console.log(sum);


// Вызов функции
const result = sumTwoNumbers(8, 8);

// Присваивание самой функции в переменную
const secondResult = sumTwoNumbers;

// Функции высшего порядка - принимают на вход функции и возвращающие функции

// Замыканием

function createCounter() {
    let counter = 0;

    return function () {
        return counter++;
    }
}

// const counter = createCounter();
//
// console.log(counter());
//
// const counter1 = createCounter();
//
// console.log(counter1());

// Произвольное количество параметров

function sum(...numbers) {
    let i = 0;
    let result = 0;

    while (numbers[i]) {
        result += numbers[i];
        i++;
    }

    return result
}

// const sumReduce = (...numbers) => numbers.reduce((a,b) => a + b);


// console.log(sumReduce(1,2,3,4,5,6,7,8,9,10));
