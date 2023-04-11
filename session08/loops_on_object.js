const person = { fname: "John", lname: "Doe", age: 25 };

console.log("=====================Object.keys================================");

const keys = Object.keys(person);
const valuesOfKeys = []
keys.forEach((key, index) => {
    console.log('key=', key);
    const value = person[key];
    console.log('value=', value);
    valuesOfKeys.push(value);
})

console.log('keys=', keys);
console.log('valuesOfKeys=', valuesOfKeys);

console.log("=====================Object.values================================");

const values = Object.values(person);

console.log('values=', values);
///

