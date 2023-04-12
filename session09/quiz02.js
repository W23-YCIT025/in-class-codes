const var1 = () => {
    console.log('var1 function is called')
};

var1();

try {
    const var2 = 'abcd';
    var2();
} catch (error) {
    console.log(error.message);
}