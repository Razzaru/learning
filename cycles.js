// while

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let i = 0;

while (numbers[i]) {
    console.log(numbers[i], i);
    i++;
}

// do while

do {
    console.log(numbers[i], i);
    i++;
} while (numbers[i]);

// for

for (let i = 0; i < numbers.length; i++) {
    if (i === 4) {
        break;
    }
    console.log(numbers[i], i);
}

for (let value of numbers) {
    console.log(value)
}

for (let index in numbers) {
    console.log(index);
}
