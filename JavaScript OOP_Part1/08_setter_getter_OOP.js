// class Person {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }
//     get message(){
// console.log(`This is ${7+9} and age is ${this.age}`);

//     }

// get fullName(){
//     return `${this.firstName} ${this.lastName}`
// }
// set fullName(name){
//     const [firstName,lastName]=name.split(" ");
//     this.firstName=firstName;
//     this.lastName=lastName
// }
//   }
//   const khanam=new Person('Khaiser','Khanam',25)
//   console.log(khanam);
//   console.log(khanam.fullName);
// khanam.fullName='Saniya Sharma';
// console.log(khanam.fullName);



  
//   Example2
class Student{
    constructor(fullName,age){
        this.fullName=fullName;
        this.age=age;
    }
    get fullName(){
        return this._fullName;
    }
    get age(){
        return this._age;
    }
    set age(num){
        if(num>=20){
            this._age=num
        }
    }
    set fullName(myName){
        if(myName.includes(" ")){
            this._fullName=myName
        }else{
            alert(`${myName} is not a fullName`)
        }
    }
}

// const student1=new Student("Khanam",25)
// console.log(student1);

const student1=new Student("Khaiser Khanam",25)
console.log(student1);
console.log(student1.fullName);
console.log(student1._fullName);
console.log(student1.age);
console.log(student1._age);