// const myName="Khanam";
// console.log(Array.from(myName));

// const number=[1,2,3];
// console.log(number.from(number));

// const Aeroplane=function(model,capacity){
    // Instance Properties
//     this.model=model;
//     this.capacity=capacity;
// }
// Instance Methods
// Aeroplane.prototype.takeOff=function(){
//     console.log('hello');
    
// }
// Static methods
// Aeroplane.displayMessage=function(){
//     console.log('bye');
    
// }
// const boeing=new Aeroplane('boeing',678)
// console.log(boeing);
// boeing.takeOff();
// boeing.displayMessage();
// Aeroplane.displayMessage();

// ES6
class Aeroplane{
    constructor(model,capacity){
        this.model=model;
        this.capacity=model;
    }
    takeOff(){
        console.log('hello class');
        
    }
    static displayMessage(){
        console.log('bye');
        
    }
}

const boeing=new Aeroplane('boeing',678)
console.log(boeing);
boeing.takeOff();
// boeing.displayMessage();
Aeroplane.displayMessage();