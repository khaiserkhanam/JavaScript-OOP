// CHALLENGE
// 1.	Implement a class structure using ES6 classes where Vehicle is the parent class and ElectricVehicle is a child class inheriting from Vehicle. Ensure that the charge property is private.
// 2.	Modify the increaseSpeed and decreaseSpeed methods in the Vehicle class to allow chaining.
// 3.	Implement a chargeBattery method in the ElectricVehicle class to increase the battery charge by 10%. Ensure that chaining is possible with this method.
// 4.	Create an instance of ElectricVehicle with the brand 'Tesla', speed of 120 km/h, and a battery charge of 23%.
// 5.	Experiment with chaining the methods increaseSpeed, chargeBattery, and decreaseSpeed on the tesla object.


// Solution
class Vehicle{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed
    }
    increaseSpeed(){
        this.speed+=10;
        console.log(`${this.brand} is going at ${this.speed}km/h`);
        return this;
        
    }
    decreaseSpeed(){
        this.speed-=5;
        console.log(`${this.brand} is slowing down to ${this.speed}km/h`);
        return this;
        
    }
}
class ElectricVehicle extends Vehicle{
    #batteryCharge;
    constructor(brand,speed,batteryCharge){
        super(brand,speed);
        this.#batteryCharge=batteryCharge
    }
    chargeBattery(){
        this.#batteryCharge+=10;
        console.log(`${this.brand} battery charge is now ${this.#batteryCharge}%`);
        return this;
    }

}

const tesla=new ElectricVehicle('Tesla',120,23);
console.log(tesla);
console.log(tesla.increaseSpeed());
console.log(tesla.decreaseSpeed());
console.log(tesla.chargeBattery());

tesla.increaseSpeed().decreaseSpeed().chargeBattery()
