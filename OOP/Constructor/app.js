// const emp1 = {
//     name: "Mustafa",
//     age: 25,
//     showInfos: function() { console.log("Bilgiler Gösteriliyor"); }
// };
// const emp2 = {
//     name: "Yunus",
//     age: 18
// };
// emp1.salary = 4000;
// console.log(emp1);

function Employee(salim) {
    this.name = salim;
    this.showInfos = function() { console.log(this.name); }
}
const emp1 = new Employee("Salim");
const emp2 = new Employee("Babuş");
emp1.showInfos();