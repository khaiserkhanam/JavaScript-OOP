const person = {
    // Data properties
    firstName: "Khaiser",
    lastName: "Khanam",
    age: 25,
    place:['Bengaluru','Mumbai','Mysore'],
    get firstLivedIn(){
        // return this.place[0]
        return this.place.slice(0,1).pop();
    },
    set firstLivedIn(place){
         return this.place.push(place)
    }
}
console.log(person);
// Accessor Properties- getter and setter

// objectname.method()-- normal way of accessing object methods


// Accessing getter
console.log(person.firstLivedIn);


// person.firstLivedIn('Chennai')--normal way of setting values in properties

// Accessing setter
person.firstLivedIn='Chennai'
console.log(person.place);
