// Vehicle - Car

class Vehicle{
    constructor(make,speed){
        this.make=make;
        this.speed=speed
    }
    accelerate(){
        this.speed+=9;
        console.log(`${this.make} is going at ${this.speed}km/hr`);
        
    }
}

class Car extends Vehicle{
    constructor(make,speed,color){
        super(make,speed);
        this.color=color
    }
    getMessage(){
        console.log(`My car is ${this.make} and color of the car is ${this.color}`);
        
    }
    accelerate(){
        console.log('Hello Students');
        
    }
}
const bmw=new Car('bmw',34,'red')
console.log(bmw);
bmw.getMessage();
bmw.accelerate();

