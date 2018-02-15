// first try
function countBs(text) {
    let found = 0;
    for (chars = 0; chars <= text.length; chars++) {
        if(text[chars] == 'B') {
            found++;
        }
    }
    return found;
}

function countChar(hay, needle) {
    let found = 0;
    for (chars = 0; chars <= hay.length; chars++) {
        if(hay[chars] == needle) {
            found++;
        }
    }
    return found;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

console.log('**************');

// second try
function countBs2(text) {
    return countChar(text, 'B');
}

console.log(countBs2("BBC"));
// → 2