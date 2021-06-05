// const obj = {
//         test1 = function() {
//             console.log("test1");
//         },
//         test2 = function() {
//             console.log("test2");
//         }
//     }
//console.log(obj);


// const emp = Object.create(obj);
// console.log(emp);
function Person() {

}
Person.prototype.test1 = function() {
    console.log("Test1");
}
Person.prototype.test2 = function() {
        console.log("Test2");
    }
    // const person = new Person();
    // console.log(person);
function Employee(name, age) {
    this.name = name;
    this.age = age;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.method = function() {
    console.log("MyTest");
};
const emp = new Employee("ASD", 12);
console.log(emp);
emp.test1();