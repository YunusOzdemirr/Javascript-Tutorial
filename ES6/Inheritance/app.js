class Person { //SuperClass, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
}
class Employee extends Person { //DerivedClass, SubClass, ChildClass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.salary = salary
    }
    showInfos() { //Overriding
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Salary: " + this.salary);
    }
    toString() { //Overriding
        console.log("Employee");
    }
    raiseSalary(amount) {
        this.salary += amount;
    }
}
const emp = new Employee("Yunus", 25, 4000);
// console.log(emp);
// emp.showInfos();
// emp.toString();
emp.raiseSalary(500);
emp.showInfos();