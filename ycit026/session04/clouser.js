// function outer() {
// 	return function inner() {
// 		console.log("Hi");
// 	}
// }

// const x = outer();
// x();


function outer() {
	const msg = "Hello";
	let counter = 0;

	return function inner() {
		counter++;
		console.log('counter', counter);
		console.log('msg', msg);
	}
}

const show = outer();
const show1 = outer();

show(); // Hello
show(); // Hello
show1(); // Hello
show1(); // Hello