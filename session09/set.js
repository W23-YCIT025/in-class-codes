// const users = new Set([{ a: 1 }, { a: 1 }]);

// console.log(...users);

const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;
const obj4 = JSON.parse(JSON.stringify(obj1));
const arr1 = ['item1'];
const arr2 = ['item1'];
const arr3 = arr1;
const arr4 = JSON.parse(JSON.stringify(arr1));

console.log('obj1 === obj2', obj1 === obj2);
console.log('obj1 === obj3', obj1 === obj3);
const users = new Set([obj1, obj2, obj3,obj4, 1, 1, 3, 4, 5, 5, 5, 5, 5, 9, arr1, arr2, arr3, arr4]);

console.log(users);

