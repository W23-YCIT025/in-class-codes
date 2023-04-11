const array1 = ['item1', 'item2', 'item3', 'item4']; // array store data in order

console.log('array1', array1);

console.log("=====================Classic For===============================");
const otherArray = [];
for (let i = 0; i < array1.length; i++) {
    if (i == 1) {
        continue;
    }
    const item = array1[i];

    if (item > 'item2') {
        break;
    }
    otherArray.push(item)

    console.log('i=', i);
    console.log(`array1[${i}]=`, array1[i]);
}

console.log('otherArray', otherArray);



console.log("=====================For of==============================");

let i = 0;
const otherArray1 = [];
for (const item of array1) {
    if (i == 1) {
        continue;
    }

    if (item > 'item2') {
        break;
    }
    console.log('i=', i);
    console.log(`item=`, item);
    i++;
    otherArray1.push(item);
}

console.log('otherArray1', otherArray1);

console.log("=====================For each================================");

array1.forEach((item, index) => {

    console.log('item=', item);
    console.log('index=', index);
});








