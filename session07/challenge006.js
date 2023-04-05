const a = [1, 4, 6, 2, 9];
const b = [9, 2, 6, 4, 1];

console.log('a', a);
console.log('a.sort()', a.sort());
console.log('a.sort() === a', a.sort() === a);
console.log('a.sort() == a', a.sort() == a);
console.log('a.sort() == a.reverse()', a.sort() == a.reverse());
console.log('a.sort() === a.reverse()', a.sort() === a.reverse());

console.log('b', b);
console.log('b.sort()', b.sort());
console.log('b.sort() === b', b.sort() === b);
console.log('b.sort() == b', b.sort() == b);


console.log('a.sort() === b.sort()', a.sort() === b.sort());

console.log('a', a);
console.log('a.reverse()', a.reverse());
console.log('a.reverse() === a', a.reverse() === a);
console.log('a.reverse() == a', a.reverse() == a);

console.log(
  a.sort() === a,
  b.sort() == b,
  a.sort() === b.sort()
)