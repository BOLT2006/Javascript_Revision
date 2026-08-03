/* let car = {
    make:"Toyota",
    model : "Camry",
    year: 2020,

    start : function(){
        return `${this.make} car got started in ${this.year}`
    }
};
*/
// console.log(car.start());  
/*
class vehicle {
    constructor (make , model){
        this.make = make
        this.model = model
    }
    start (){
        return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends vehicle {
    drive(){
        return `${this.make} : this is a inheritance example`
    }
}
let myCar = new Car("mercedes" , "XUV")
console.log(myCar.drive());
console.log(myCar.start());
*/

// Polymorphism
class Bird {
    fly(){
        return `Flying.....`;
    }
}
class Penguin extends Bird {
    fly(){
        return `Pengiuns can't fly..`
    }
}
let bird = new Bird();
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

