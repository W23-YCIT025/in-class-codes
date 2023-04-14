const obj = {
    '1keyStartsWithNumber': '...',
    'key/with/slashes': '...',
    'key-with-dashes': '...',
    'key with spaces': '...',
    '#&()[]{}èä樹keyWithSpecialChars': '...',
    4: 'sad',
};

console.log('obj', obj);


const obj1 = { greeting: 'hello world' };

console.log('obj1', obj1);

obj1.greeting = 'Hi there!';
console.log('obj1', obj1);
obj1['greeting'] = 'Welcome.';
console.log('obj1', obj1);

obj1.newKey1 = 'new value 1';
console.log('obj1', obj1);
obj1['new key 2'] = 'new value 2';
console.log('obj1', obj1);

const key = 'new key 3';
obj1[key] = 'new value 3';
console.log('obj1', obj1);

delete obj1;
console.log('obj1', obj1);
delete obj1.greeting;
console.log('obj1', obj1);
delete obj1['newKey1'];
console.log('obj1', obj1);

if (obj1['new key 2']) {
    console.log('new key 2 is exist')
}

if (!!obj1['new key 2']) {
    console.log('new key 2 is exist')
}

if (obj1.hasOwnProperty('new key 2')) {
    console.log('new key 2 is exist')
}

const obj3 = {
    name: 'Ali',
    age: 65,
};

for (const key of Object.keys(obj3)) {
    const value = obj3[key];
    console.log(key, value)
}
for (const value of Object.values(obj3)) {
    console.log(value)
}
for (const item of Object.entries(obj3)) {
    const [key, value] = item;
    console.log(item);
    console.log(key, value);
}
