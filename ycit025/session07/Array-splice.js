const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]


console.log('months', months);
months.splice(1, 0);
// months.splice(1, 0, 'Feb');
console.log('months', months);
months.splice(2, months.length);
console.log('months', months);
months.splice(2, 0, 'a', 'b', 'c', 'd');
console.log('months', months);
months.splice(2, months.length);
console.log('months', months);
const secondArray = ['a', 'b', 'c', 'd']
months.splice(2, 0, ...secondArray);
console.log('months', months);
