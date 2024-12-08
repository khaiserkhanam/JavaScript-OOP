// 2. Adding a Method to the Student Class
// After inheriting from Person, add a new method study() to the Student constructor that returns I am studying in grade ${this.grade}.
// How can you implement the study() method in the Student class, and what will be the output when calling student.study() on an instance of Student?

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return `Hi, I am ${this.name}, and I am ${this.age} years old.`;
}

function Student(name, age, grade) {
    Person.call(this,name,age)
    this.grade = grade;
}

Student.prototype=Object.create(Person.prototype)
Student.prototype.study=function(){
    return `I am studying in grade ${this.grade}`
}
const student1=new Student('Khanam',25,'10th grade')
console.log(student1.study());
