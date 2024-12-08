// Prototype Property
// __proto__ Property
// isPrototypeOf method
// hasOwnProperty

const Aeroplane=function(model,capacity){
    //Instance Properties
    this.model=model;
    this.capacity=capacity;

    // Bad practice
    // this.takeOff=function(){
    //     console.log("Iam newly created method");
        
    // }
    
}
Aeroplane.prototype.takeOff=function(){
    console.log("Iam newly created method");
    
}
console.log(Aeroplane.prototype);

const boeing=new Aeroplane('Boeing 747',461)
const airbus=new Aeroplane('Airbus 360 675',555)
// console.log(boeing);
boeing.takeOff();
airbus.takeOff();
console.log(boeing.__proto__);
console.log(boeing.__proto__===Aeroplane.prototype);

// isPrototypeOf
console.log(Aeroplane.prototype.isPrototypeOf(Aeroplane));
console.log(Aeroplane.prototype.isPrototypeOf(boeing));
console.log(Aeroplane.prototype.isPrototypeOf(airbus));

console.log(boeing);

Aeroplane.prototype.isFlying='Currently not flying';
console.log(boeing.__proto__);
console.log(boeing.isFlying);
console.log(airbus.isFlying);


// hasOwnProperty
console.log(boeing.hasOwnProperty('model'));
console.log(boeing.hasOwnProperty('isFlying'));
