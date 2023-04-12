const obj1 = {
    first: 20,
    second: 30,
};
console.log(obj1);



const obj2 = {
    first: 20,
    second: 30,
    first: 'anotherValue1',
    first: 'anotherValue2'
};
console.log(obj2);

console.log("================================================")


const obj3 = {
    first: 'firstObj3',
    second: 'secondObj3',
}
const obj4 = {
    first: 'firstObj4',
}
const obj5 = {
    third: 'thirdObj5',
}

const objMerged = {
    ...obj4,
    ...obj5,
    ...obj3,
}

console.log('objMerged', objMerged)