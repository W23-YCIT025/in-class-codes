let cat = { type: "tiger", size: "large" };

let json = JSON.stringify(cat, ['type']);

console.log(json); // print {"type":"tiger"}