// first try

function range(start = 0, end = 10, step = 1) {
    let table = [];
    if (start < end) {
        for (let number = start; number <= end; number = number + step) {
            table.push(number);
        }
    } else {
        if (step >= 0) {
            step = -1;
        }
        for (let number = start; number >= end; number = number + step) {
            table.push(number);
        }
    }
    return table;
}

function sum(numbers) {
    let value = 0;
    for (number of numbers) {
        value = value + number;
    }
    return value;
}

console.log(range(1, 10, 1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sum(range(1, 10)));
// → 55

console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]

console.log(range(5, 2));
// → [5, 4, 3, 2]

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]