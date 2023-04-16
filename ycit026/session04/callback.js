const arr1 = [1,2,3,4,5,6,7,8,9];

const callbackFn = (item, index) => {
    console.log('index: ' , index)
    console.log('item: ' , item)
};

arr1.forEach(callbackFn);



