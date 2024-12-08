/*1)Re-create the Truck functionality using an ES6 class - Get solution from Challenge1.
2)Define a getter and setter for the currentLoad property in the Truck class.
•	Getter: Should return the value of _currentLoad.
•	Setter: Should validate that the new load is within the valid range (i.e., between 0 and the loadCapacity), and update _currentLoad accordingly.
3)Experiment with setting an invalid load using the setter for currentLoad (e.g., setting the load to a negative value or exceeding the load capacity). Observe the behavior of your setter method and document how the truck class handles these cases.*/


//Solution
class Truck{
    constructor(make,loadCapacity,currentLoad){
    this.make=make;
    this.loadCapacity=loadCapacity;
    this.currentLoad=currentLoad;
    }
    get currentLoad(){
        return this._currentLoad;
    }
    set currentLoad(value){
        if(value>=0 && value<=this.loadCapacity){
            this._currentLoad=value
        }else{
            console.log(`Invalid load. Must be between 0 and ${this.loadCapacity}`);
            
        }
    }
    load(amount){
        if(this.currentLoad+amount<=this.loadCapacity){
            this.currentLoad+=amount;
            console.log(`${this.make} truck loaded with ${amount} tons. Current Load: ${this.currentLoad} tons`);
            
        }else{
            console.log(`Cannot load ${amount} tons. Exceeds capacity ${this.loadCapacity} tons`);
        }
    
    }
    unload(amount){
        if(this.currentLoad-amount>=0){
            this.currentLoad-=amount;
            console.log(`${this.make} truck unloaded ${amount} tons. Current load: ${this.currentLoad} tons`);
            
        }else{
            console.log(`Cannot unload ${amount} tons.Current load is only ${this.currentLoad} tons`);
        }
        
    }
}


const truck1=new Truck('Volvo',20,10);
const truck2=new Truck('Scania',25,5);
truck1.load(5)
truck1.unload(3);
truck1.load(10)
truck1.unload(15);

truck2.load(5)
truck2.unload(3);
truck2.load(10)
truck2.unload(15);
// const truck3=new Truck('Toyota',25,30);
// console.log(truck3);

const truck4=new Truck('Toyota',25,10);
console.log(truck4);
console.log(truck4.currentLoad);
console.log(truck4._currentLoad);