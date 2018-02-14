// first try

//let size = Number(prompt("Enter chess width"));
let size = 24; // prompt not working with node.js
let line = '';
console.log(size + 'x' + size + 'Grid:');
if (!isNaN(size)) {
    for (linecount = 1; linecount <= size; linecount++) {
        for (linewidth = 1; linewidth <= size; linewidth++) {
            if(line.length % 2) {
                line = line + '#';
            } else {
                line = line + ' ';
            }
        }
        line = line + '\n';
    }
    console.log(line);
} else {
    console.log('Please enter only digits');
}
