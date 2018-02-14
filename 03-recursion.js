function isEven(number) {
    let value = 'false';
    if (!isNaN(number)) {
        if (number > 1) {
            if(number % 2 == 0) {
                value = 'true';
            }
        }
    }
    return value;
}

console.log('50: ' + isEven(50));
// → true
console.log('75: ' + isEven(75));
// → false
console.log('-1: ' + isEven(-1));
// → ??