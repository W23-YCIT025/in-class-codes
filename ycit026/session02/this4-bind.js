var name = "Mario";
// this.name = "Mario";

const user = {
    name: "Emily",
    hello() {
        return "Hello " + this.name;
    },
    hello2: () => {
        return "Hello " + this.name;
    },
    hello3(family) {
        return "Hello " + this.name + ' ' + family;
    },
}

const suhail = {
    name: "Suhail",
};

console.log(user.hello())
// const helloToMario = user.hello;
const helloToMario = user.hello.bind(suhail);
console.log(helloToMario())
const helloToMario2 = user.hello2.bind(suhail);
console.log(helloToMario2())
console.log(user.hello3('Jafari'));
const helloToMario3 = user.hello3.bind(suhail, 'Parry1');

console.log(helloToMario3('Parry2'))


function funcName(param1, param2, param3, param4) {
	console.log(`${param1}, ${param2}, ${param3}, ${param4}`);
}

const abcd = ["arg1", "arg2", "arg3", "arg4"]
const myFunc = funcName.bind({}, ...abcd);

myFunc(); // arg1, arg2, arg3, arg4



// console.log(user.hello2())
