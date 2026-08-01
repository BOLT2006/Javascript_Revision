let balance = 120;

let anotherBalance = new Number(29) // not recommended 

/*
console.log(typeof(anotherBalance))
console.log(typeof(balance));
console.log(anotherBalance.valueOf());
*/

// null and undefined
let firstName;
console.log(firstName); // output : undefined  => this means the firstName is exist but doesnt have value

let lastName = null; // it is empty neither number,string,boolean etc just null
console.log(lastName);

//string
let myString = "heloo";
let myString1 = 'Hola';
let username = 'Yash';


let greetMessage = `hello ${username}`;
console.log(greetMessage);

let demo = `value is : ${6*3}`;
console.log(demo);

// Symbols

let sm1 = Symbol();
let sm2 = Symbol(); 

console.log(sm1 == sm2); // it creates new symbol each time
