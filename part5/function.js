/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.
Store the result in a variable named `teaOrder`.
*/
 function makeTea(typeOfTea){ // typeOfTea is parameter which is place holder 
    return `Making ${typeOfTea}`
 }
let teaOrder = makeTea("green tea") // "green tea" is an argument
// console.log(teaOrder);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return "Order confirmed for chai"
    }
    return confirmOrder() // confirmOrder is reference and confirmOrder() is to execute the functiom
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/
let calculateTotal = (price , quantity) =>  price * quantity // Implicit return
let  totalCost = calculateTotal(5 , 2);
// console.log(totalCost);

/*
4. Write a function named `processTeaOrder` that takes
   another function, `makeTea`, as a parameter and calls it
   with the argument `"earl grey"`.

   Return the result of calling `makeTea`.
*/
function makeTea(teaType){
    return `Making ${teaType}`
}
function processTeaOrder(makeTea){  // function is passed has a parameter
    return makeTea("earl grey")
}
// console.log(processTeaOrder(makeTea));

/*
5. Write a function named `createTeaMaker` that returns
   another function. The returned function should take one
   parameter, `teaType`, and return a message like "Making
   green tea".

   Store the returned function in a variable named
   `teaMaker` and call it with `"green tea"`.
*/
function createTeaMaker(){
    return function makingTea(teaType){
            return `Making ${teaType}`
    }
}
let teaMaker = createTeaMaker();
teaMaker("green tea");
console.log(teaMaker("green tea")); // Making green tea