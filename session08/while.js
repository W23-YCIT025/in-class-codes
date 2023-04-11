let counter = 0;

let flag = true;
while (flag) {
    console.log('counter=', counter);
    counter++;
    if (counter > 1000) {
        flag = false;
    }
}

counter = 0;
do {
    console.log('counter1=', counter);
    counter++;
    if (counter > 1000) {
        flag = false;
    }
}
while (flag)