// Employee
// Manager
// Joinee

const Employee={
    getMessage(){
        console.log(`My firstName is ${this.firstName} and my lastName is ${this.lastName}`);
        
    },
    init(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName
    }
}
const Manager=Object.create(Employee);
Manager.init=function(firstName,lastName,course){
    Employee.init.call(this,firstName,lastName);
    this.course=course;
}
Manager.displayMessage=function(){
    console.log(`Iam new joinee and my name is ${this.firstName}`);
    
}
const khanam=Object.create(Manager);
khanam.init("Khaiser","Khanam",'Science')
console.log(khanam);
khanam.getMessage();
khanam.displayMessage();


