// 4. Accessing Parent Class Methods
// After setting up inheritance between Person and Student, how can you call the Person's original introduce() method within the Student's overridden introduce() method to avoid rewriting the common parts?
// -- How can you use the Person’s introduce() method inside the Student class’ introduce() method while still adding the student’s grade to the output?



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
const student1=new Student('Khanam',25,'10th grade')
console.log(student1.introduce());


