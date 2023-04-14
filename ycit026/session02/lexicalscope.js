function print() {
    console.log(a);
}

function callThePrinter() {
    var a = 1;
    print();
}

var a = 2;
callThePrinter();


console.log("================================================")

function callThePrinter2() {
    var a2 = 1;
    function print2() {
        console.log(a2);
    }
    print2();
}

var a2 = 2;
callThePrinter2();

