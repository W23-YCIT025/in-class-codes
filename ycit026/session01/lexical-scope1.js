var firstname = 'David';

console.log(firstname);
console.log(this.firstname);
console.log(this);

var obj = {
  firstname: 'John',
  getName() {
    return this.firstname;
  }
}

console.log(obj.getName());