//CHALLENGE QUESTION
/*1.	Use a constructor function to implement a Truck. A truck has a make, loadCapacity (in tons), and currentLoad (in tons) properties.
2.	Implement a load method that will increase the truck's currentLoad by a specified amount and log the new load to the console.
3.	Implement an unload method that will decrease the truck's currentLoad by a specified amount and log the new load to the console.
4.	Create 2 truck objects and experiment with calling load and unload multiple times on each of them.*/

//CHALLENGE SOLUTION


function Truck(make,loadCapacity,currentLoad){
    this.make=make;
    this.loadCapacity=loadCapacity;
    this.currentLoad=currentLoad;
}
Truck.prototype.load=function(amount){
    if(this.currentLoad+amount<=this.loadCapacity){
        this.currentLoad+=amount;
        console.log(`${this.make} truck loaded with ${amount} tons. Current Load: ${this.currentLoad} tons`);
        
    }else{
        console.log(`Cannot load ${amount} tons. Exceeds capacity ${this.loadCapacity} tons`);
    }

}
Truck.prototype.unload=function(amount){
    if(this.currentLoad-amount>=0){
        this.currentLoad-=amount;
        console.log(`${this.make} truck unloaded ${amount} tons. Current load: ${this.currentLoad} tons`);
        
    }else{
        console.log(`Cannot unload ${amount} tons.Current load is only ${this.currentLoad} tons`);
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