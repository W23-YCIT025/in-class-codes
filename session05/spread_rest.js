function add(a, b) {
    return a + b;
};

const nums = [5, 6];
const sum = add(...nums);
const sum1 = add(nums[0], nums[1]);
console.log(sum);
console.log(sum1);


function add2(...rest) {
    return rest.reduce((total, current) => total + current);
};

const sum3 = add2(1);
console.log(sum3);
const sum4 = add2(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sum4);


function add3(arg) {
    return arg.reduce((total, current) => total + current);
};

const sum5 = add3([1]);
console.log(sum5);
const sum6 = add3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sum6);