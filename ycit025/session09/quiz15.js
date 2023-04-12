let animals = [{ type: 'lion' }, 'tiger'];
// let clones = animals.slice();
let clones = [...animals];
// let clones = JSON.parse(JSON.stringify(animals));

console.log('clones', clones);

console.log("================================================");


clones[0].type = 'bear';
clones[1] = 'sheep';

console.log('clones', clones);
console.log('animals', animals);


console.log(animals[0].type, clones[0].type);
console.log(animals[1], clones[1]);