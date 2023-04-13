
function f() {
    // return this.name;
    return this;
}

const result  = f();

const f2 = () => {
    return this;
}
const result2  = f2();

console.log(result);
console.log(result2);
console.log(this);

