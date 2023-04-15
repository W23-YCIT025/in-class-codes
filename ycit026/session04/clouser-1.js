let counter = 0;
function clicked() {
	counter++;

	return counter;
}


function doubleClick() {
	counter++;
	counter++;

	return counter;
}


console.log(clicked()); // 1
console.log(clicked()); // 1
console.log(clicked()); // 1
console.log(doubleClick()); // 1
console.log(doubleClick()); // 1