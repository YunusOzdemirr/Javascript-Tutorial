//Mapler - key(Anahtar) - Value(Değer)
// let myMap = new Map();
//Create


// const key1 = "Mustafa";
// const key2 = { a: 10, b: 20 };
// const key3 = () => 2;
// myMap.set(key1, "string değer");
// myMap.set(key2, "Object Literal Değer");
// myMap.set(key3, "Function Değer");

//GET

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);
// console.log(myMap.size);
// const cities = new Map();

// cities.set("Ankara", 5);
// cities.set("İstanbul", 15);
// cities.set("İzmir", 4);

//For Each

// cities.forEach(function(value, key) {
//     console.log(key, value);
// })

//For Of

// for (const [key, value] of cities) { //Destructing
//     console.log(key, value);
// }

//Map Keys
// for (let key of cities.keys()) {
//     console.log(key);
// }

// Map Values
// for (let value of cities.values()) {
//     console.log(value);
// }

//Array Map

// const array = [
//     ["key1", "value1"],
//     ["key2", "value2"]
// ];

// const lastMap = new Map(array);

// console.log(lastMap)

//Maplerden array oluşturma

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

const array = Array.from(cities);
console.log(array);