function TSButton() {
    let name = "Shaun";
    document.getElementById("ts-example").innerHTML = greeter(user);
}
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Shaun", "R.", "Smith");
function sayHello() {
    const compiler = document.getElementById("compiler")
        .value;
    const framework = document.getElementById("framework")
        .value;
    return `Hello from ${compiler} and ${framework}!`;
}
//# sourceMappingURL=app.js.map