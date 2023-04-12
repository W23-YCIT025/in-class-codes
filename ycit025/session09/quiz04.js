let rainForestAcres = 10;
let animals = 0;

while (rainForestAcres < 13 || animals <= 2) {
// while (animals <= 2 || rainForestAcres < 13) {
    console.log('animals', animals)
    console.log('animals <= 2', animals <= 2)
    console.log('rainForestAcres', rainForestAcres)
    console.log('rainForestAcres < 13', rainForestAcres < 13)
    rainForestAcres++;
    animals += 2;
}
console.log("================================================")
console.log('animals', animals)
console.log('rainForestAcres', rainForestAcres)

