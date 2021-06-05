const person = {
    name: "Yunus",
    age: 18,
    salary: 3000
};
const langs = ["Python", "Java", "C#", "Php"];

const name = "Mustafa";
//For In
// for (let prop in person) {
//     // console.log(prop, person[prop]);
//     console.log(person[prop]);
// }

// for (let index in langs) {
//     // console.log(prop, person[prop]);
//     console.log(index);
// }
// for (let index in name) {
// console.log(prop, person[prop]);
//     console.log(index);
// }

for (let value of langs) {
    console.log(value);
}