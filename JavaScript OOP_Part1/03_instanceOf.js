const Aeroplane=function(model,capacity){
    //Instance Properties
    this.model=model;
    this.capacity=capacity;

    // Bad practice
    this.takeOff=function(){
        console.log("Iam newly created method");
        
    }
    
}
const boeing=new Aeroplane('Boeing 747',461)
console.log(boeing);
const airbus=new Aeroplane('Airbus 360 675',555)
console.log(airbus);
airbus.takeOff();


// instanceof
console.log(boeing instanceof Aeroplane);
console.log(airbus instanceof Aeroplane);

const data=true;
console.log(data instanceof Aeroplane);




