// Object.create()
const AeroplaneProto={
    takeOff(){
        console.log('Iam ready to takeoff-3');
    },
    init(model,capacity){
        this.model=model;
        this.capacity=capacity
    }
}
const boeing=Object.create(AeroplaneProto);
console.log(boeing);
boeing.takeOff();
boeing.init('boeing567',987)
console.log(boeing);
console.log(boeing.__proto__);
console.log(AeroplaneProto);
console.log(boeing.__proto__===AeroplaneProto);

const airbus=Object.create(AeroplaneProto);
airbus.init('airbus786',897)
console.log(airbus);
airbus.takeOff();