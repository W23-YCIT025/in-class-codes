const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;

while (cars[i]) {
    console.log(cars[i]);
    i++;
}
console.log("================================================")
cars.forEach((car)=>{
    console.log(car);
})