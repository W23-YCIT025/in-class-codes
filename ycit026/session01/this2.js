
var name = "David";

function getName() {
    console.log(this.name);
}

const getName1 = () => {
    console.log(this.name);
}

const obj = {
    name: "John",
    getName: getName,
    getName1: getName1,
}

getName();
obj.getName();
getName1();
obj.getName1()
console.log("================================================");

const person = {
    name: "John",
    getName() {
        console.log(this);
        // console.log(this.name);
    },
    returnItself() {
        return this;
    }
}

person.getName()

console.log('person === person.returnItself()', person === person.returnItself())