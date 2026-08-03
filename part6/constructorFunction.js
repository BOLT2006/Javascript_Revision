function Person(name , age){
    this.name = name;
    this.age = age
}
function Car(make , model){
   this.make = make
   this.model = model

}
let myCar = new Car("Toyota", "Cambry"); // new keyword is used create new object else it is undefined
// console.log(myCar);
let myNewCar = new Car("Tata" , "Safari")
// console.log(myNewCar);

function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is cup of ${this.type}`
    }
}
let lemonTea = new Tea("Lemon tea");
// console.log(lemonTea.describe());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name = name;
}
let tea = Drink("chai")  