// Construction function
const Aeroplane=function(model,capacity){
    this.model=model;
    this.capacity=capacity
}
Aeroplane.prototype.takeoff=function(){
    console.log('Iam ready to takeoff-1');
    
}

// ES6 classes
class AeroplaneClass{
    constructor(model,capacity){
        this.model=model;
        this.capacity=capacity
    }
    takeoff(){
        console.log('Iam ready to takeoff-2');
    }
}

// Object.create()

const AeroplaneProto={
    takeOff(){
        console.log('Iam ready to takeoff-3');
    }
}
const boeing=Object.create(AeroplaneProto);
console.log(boeing);
boeing.takeOff();
boeing.model='boeing456';
boeing.capacity=567;
console.log(boeing);