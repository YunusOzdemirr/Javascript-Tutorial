//Setler - Kümeler

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Yunus");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({ a: 1, b: 2, c: 3 });

const mySet2 = new Set([100, 3.14, "Yunus"])
    // console.log(mySet);
    // console.log(mySet2);
    //Size
    // console.log(mySet.size);

//Delete Metod
// mySet.delete("Yunus");
// console.log(mySet);

//Has Method

// console.log(mySet.has("Yunus"));
// console.log(mySet.has(3.14));
// console.log(mySet.has(1000));
// console.log(mySet.has([1, 2, 3]));

// For Each

// mySet.forEach(function(value) {
//     console.log(value);
// });

// For Of

// for (let value of mySet) {
//     console.log(value)
// }

//Seti array yapma
const array = Array.from(mySet);
console.log(array);