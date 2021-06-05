// const object = new Object(); //Object Literal
// object.name = "Mustafa";
// console.log(object);

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function() {
//         console.log("Bilgiler Gösteriliyor");
//     }
// }
// const emp1 = new Employee("Yunus", 18);
// console.log(emp1);


function Employee(name, age) {
    this.name = name;
    this.age = age;
}
Employee.prototype.showInfos = function() {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}
const emp1 = new Employee("Yunus", 18);
const emp2 = new Employee("Mustafa", 25);
emp2.showInfos();
console.log(emp1);