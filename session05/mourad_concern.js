
const dog = { a: {} };
const cat = { a: dog.a };

console.log(dog == cat); //false
console.log(dog.a == cat.a); //true
console.log(dog.a === cat.a); //true