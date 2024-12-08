// 1. Basic Inheritance Setup
// You are given two constructor functions, Person and Student. The Person constructor takes name and age, while Student also includes a grade. Your task is to set up inheritance so that Student inherits properties from Person.
// How can you make the Student constructor inherit from Person and allow access to the introduce() method in Student instances?


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
const student1=new Student('Khanam',25,'10th grade')
console.log(student1);
console.log(student1.introduce());

