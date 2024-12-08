const Aeroplane=function(model,capacity){
this.model=model;
this.capacity=capacity;

}
const boeing=new Aeroplane('Boeing 747',461)
console.log(boeing);
const boeing1=new Aeroplane('Boeing1 675',500)
console.log(boeing1);
const airbus=new Aeroplane('Airbus 360 675',555)
console.log(airbus);

// Step
// 1-Create new empty object={}
// 2- Function is called , this={}
// 3-{} linked to prototype
// 4- Automatically returns empty object={}