// 5. Creating Multiple Student Instances
// Given that Student inherits from Person, create two different instances of Student with different names, ages, and grades. Then, call the introduce() and study() methods on both instances and compare their outputs.
//  How can you create two instances of Student, call their introduce() and study() methods, and what will be the expected output for each instance?


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
Student.prototype.introduce=function(){
    const personIntroduce=Person.prototype.introduce.call(this);    
    return `${personIntroduce}, and I study in grade ${this.grade}`
}
const studentA=new Student('Khanam',25,'12th Grade')
const studentB=new Student('Reema',27,'Degree Grade')
console.log(studentA.introduce());
console.log(studentA.study());
console.log(studentB.introduce());
console.log(studentB.study());


