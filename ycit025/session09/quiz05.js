const func1 = () => {
    console.log('call function1')
}

func1();


const func2 = (parm1 = 'param1Value') => {
    console.log(`call function2 param1 ${parm1}`);
}

func2();
func2(null);
func2(0);
func2(undefined);

console.log("============================================================");

var thing;
console.log('thing', thing);
let func = (str = 'no arg') => {
  console.log(str);
};
func(thing);
func(null);