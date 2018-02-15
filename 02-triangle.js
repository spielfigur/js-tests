// first try
let number = 1;
let triangle = '#';
while (number <= 7) {
  console.log(triangle);
  triangle = triangle + '#';
  number++;
}

console.log('**************');

// second try
let triangle2 = "#";
while (triangle2.length <= 7) {
	console.log(triangle2);
	triangle2 = triangle2 + '#';
}

console.log('**************');

// third try
for (let triangle3 = '#'; triangle3.length <= 7; triangle3 = triangle3 + '#') {
	console.log(triangle3);
}