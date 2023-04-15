

function greeting(type) {  
    const welcomeFn = (user) => {
        console.log(`${type} ${user}! This is our application.`);
    }
	return welcomeFn;
}

const welcome = greeting('Welcome');
welcome('Mario'); // Welcome Mario! This is our application.
welcome('Emily'); // Welcome Emily! This is our application.

const hello = greeting('Hello');
hello('Mario'); // Hello Mario! This is our application.
hello('Emily'); // Hello Emily! This is our application.