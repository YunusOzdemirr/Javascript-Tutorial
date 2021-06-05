// let number1, number2;

// arr = [100, 200, 300, 400];

// number1 = arr[0];
// number2 = arr[1];
// console.log(number1, number2);
//Destructing
// [number1, number2] = arr;
// [number1, number2] = [100, 200];
// const [number1, numb2] = arr;
// console.log(number1, number2);

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };

// const { a: number1, c: number2, e: number3 } = numbers;
// const { a, c, e } = numbers;
// console.log(a, c, e);
// const getLangs = () => ["Python", "Java", "C#"];
// const a = langs = [lang1, lang2, lang3] = getLangs();
// console.log(a);
//Object

const person = {
    name: "yunus özdemir",
    year: 1993,
    salary: 3000,
    showInfos: () => console.log("Bilgiler gösteriliyor...")
}
const a = { name: isim, year: yil, salary: maaş, showInfos: bilgileriGoster } = person;
console.log(a);
bilgileriGoster();