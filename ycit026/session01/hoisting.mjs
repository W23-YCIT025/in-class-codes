// import fetch from 'fetch';
import fetch from 'node-fetch';

// const fetch = require('node-fetch');
// console.log(x);
// var x = "Hello";
// console.log(x);


// welcome();

// function welcome() {
//     console.log("Hello");
// }


// console.log(welcome22);
// welcome22();

// var welcome22 = function () {
//     console.log("Hello22");
// }
// welcome22();


// console.log(y);
// let y = "Hello";


// welcome1();

// let welcome1 = () => {
//     console.log("Hello1")
// }

// welcome2();

// let welcome2 = function (){
//     console.log("Hello1")
// }

// welcome3();

// const welcome3 = function (){
//     console.log("Hello1")
// }



// var color = 'Yellow';
// abcd()
// function abcd() {
//     // ...
//     if (typeof color === 'undefined') {
//         var color = 'Green';
//     }

//     console.log(color);
// };

// console.log('init')
const callingAPi = async () => {
    const resultRaw = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await resultRaw.json();
    console.log(result);
};

// callingAPi();
// console.log('finish')

(async() => {
    console.log('init')
    await callingAPi();
    console.log('finish')
})();