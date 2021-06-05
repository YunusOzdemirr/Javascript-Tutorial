// const object = new Object(); //Object Literal
// object.name = "Mustafa";
// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler Gösteriliyor");
    }
}
const emp1 = new Employee("Yunus", 18);
console.log(emp1);