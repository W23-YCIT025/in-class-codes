function sum(num1, num2 = 2, num3 = 3) {
    return num1 + num2 + num3;
}
let values = [1, 5];
let total = sum(4, ...values);

console.log('total', total);