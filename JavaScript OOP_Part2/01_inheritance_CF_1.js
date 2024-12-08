// Parent Class - Employee
function Employee(name,id,department){
    this.name=name;
    this.id=id;
    this.department=department
}
Employee.prototype.getDetails=function(){
    return `Name : ${this.name} , Id: ${this.id}, Department : ${this.department}`
}
Employee.prototype.work=function(){
    return `${this.name} is working in the ${this.department} department`;
}

// Child class- Manager
function Manager(name,id,department,teamSize,officeLocation){
    Employee(name,id,department);
    this.teamSize=teamSize
    this.officeLocation=officeLocation
}

Manager.prototype.getDetails=function(){
    return `Name : ${this.name} , Id: ${this.id}, Department : ${this.department}, Team Size : ${this.teamSize}, Office Location: ${this.officeLocation}`
}
Manager.prototype.work=function(){
    return `${this.name} is working in the ${this.department} department`;
}
// Additional methods
Manager.prototype.manageTeam=function(){
    return `${this.name} is managing the team of ${this.teamSize} people.`
}
Manager.prototype.approveLeave=function(employeeName){
    return `${this.name} has approved leave for ${employeeName}`
}

const manager1=new Manager('Khanam',133,'Software Engineer',15,'Room 301')
console.log(manager1);
console.log(manager1.getDetails());
