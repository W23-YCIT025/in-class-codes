// function Person(name) {
//     this.name = name;
// }


// // class Person{
// //     constructor(name){
// //         this.name = name;
// //     }
// // }

// const mario = new Person("Mario");
// const emily = new Person("Emily");

// console.log('mario', mario);
// console.log('emily', emily);
// console.log('mario.name', mario.name);
// console.log('emily.name', emily.name);


var name = 'emily';

const obj = {
    name: 'Jason'
}

function getName(family, age) {
    console.log(`Hello ${this.name} ${family} happy ${age}th anniversary`);
    // return this.name;
}


// getName();
getName.apply(obj, ['Jafari', '38']);
getName.call(obj, 'Jafari', '38');

