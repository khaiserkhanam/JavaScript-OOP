// Function Declaration
// Function Expression

// function myData(){

// }

// const myData=function(){
    
// }

// class Car{

// }

// const Car=class{

// }


class Car{
constructor(color,model){
this.color=color;
this.model=model
}
displayMessage(){
    console.log(`Color of car is ${this.color}`);
    
}
drive(){
    console.log(`Lets drive the car which is having model ${this.model}`);
}
}
// Car.prototype.drive=function(){
//     console.log(`Lets drive the car which is having model ${this.model}`);
    
// }
const car1=new Car('red','Toyota')
console.log(car1);
car1.displayMessage();
console.log(Car.prototype);
console.log(car1.__proto__);
console.log(car1.__proto__===Car.prototype);
car1.drive();
