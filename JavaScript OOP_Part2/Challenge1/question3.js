// 3. Overriding the Introduce Method
// Now that Student inherits from Person, override the introduce() method in the Student class so that it includes the student’s grade in the output. For example, Hi, I am [name], I am [age] years old, and I study in grade [grade]. 
// How can you override the introduce() method in Student to also include the grade information in the output?


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
    return `Hi, I am ${this.name}, I am ${this.age} years old, and I study in grade ${this.grade}`
}
const student1=new Student('Khanam',25,'10th grade')
console.log(student1.introduce());

