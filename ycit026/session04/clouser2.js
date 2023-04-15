function makeCounter(counterName) {
	let counter = 0;

	return function () {
        counter ++;
		console.log(`counter: ${counter} counterName: ${counterName}`)
	}
}

const counter1 = makeCounter('counter1');
const counter2 = makeCounter('counter2');
counter1()
counter1()
counter1()
counter1()
counter1()
counter1()
counter1()
counter1()
counter1()
counter1()
counter2()
counter2()
// counter1()
// counter1()
// counter1()
// counter1()
// counter2()

