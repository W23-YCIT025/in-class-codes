const var1 = new String('var1');
console.log('var1', var1);
console.log('var1 instanceof String', var1 instanceof String);

const globalVar = 'abcd';

console.log("================================================");

class User {
    constructor(name, family) {
        const abcd = 11;
        console.log(name, family);
        this.name = name
        this.family = family
        console.log(abcd);
    }

    static postalcode = 'xcd'

    static func1(){
        console.log('Static func1');
        console.log(this);
    }

    phone = 1234
    name = ''
    family = ''

    #secret = 'secret123'

    hello() {
        // console.log(abcd);
        console.log(`Hello ${this.name} ${this.family} ${globalVar} ${this.#secret}`)
    }

    fetchSecret() {
        console.log(this);
        return this.#secret;
    }

    changeSecret(newSecret){
        this.#secret = newSecret;
    }

}
console.log("================================================");

const user1 = new User('Jason', 'Jafari');

console.log('user1', user1);
console.log('user1 instanceof User', user1 instanceof User);
console.log('user1.phone', user1.phone)

const user2 = new User('Suhail', 'Parry')
console.log('user2.phone', user2.phone)
console.log('user2', user2)
console.log('user2.fetchSecret()', user2.fetchSecret())
console.log('typeof user2', typeof user2)

user1.hello()
user2.hello()

const user3 = new User();
user3.hello()

console.log('user1.fetchSecret()', user1.fetchSecret())
user1.changeSecret('newsecret 789');
console.log('user1.fetchSecret()', user1.fetchSecret())

console.log('user1.postalcode', user1.postalcode);
console.log('User.postalcode', User.postalcode);


// console.log('user1.func1()', user1.func1());
console.log('User.func1()', User.func1());
