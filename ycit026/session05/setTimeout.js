let counter = 0;
const myGreeting = () => {
    counter ++;
    console.log( `Hello Class ${counter}`);
}
setTimeout(myGreeting, 0);

// setInterval(myGreeting, 1000);

console.log('I ');

console.log(counter)

setTimeout(()=> {
    console.log('Love ');
}, 1000);
console.log('Javascript');