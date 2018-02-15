// first try
const three = 'Fizz';
const five = 'Buzz';

for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0) {
        if (number % 5 == 0) {
            console.log(three+five); 
        } else {
            console.log(three);
        }
    } else if (number % 5 == 0) {
        console.log(five);
    } else {
        console.log(number);
    }
}

console.log('**************');

// second try
const fizz = 'Fizz';
const fibuzz = 'Buzz';
for (let number = 1; number <= 100; number++) {
    if ((number % 3 == 0) || (number % 5 == 0)) {
        if ((number % 3 == 0) && (number % 5 == 0)) {
            console.log(fizz+fibuzz); 
        } else {
            if (number % 3 == 0) {
                console.log(fizz); 
            } else {
                console.log(fibuzz);
            }
        }
    } else {
        console.log(number);
    }
}