const username = {
    firstName : "Yash", // this vakue are primitives , so this value are mutuable
    isLoggedIn : true,
    "E mail" : "abc@gmail.com"

};
// username.firstName = "Bolt";
username.lastName = "Sathe"
// console.log(username.firstName);
// console.log(username);
// console.log(`${username.firstName} ${username.lastName}`);
console.log(username["E mail"]);
console.log(username["isLoggedIn"]);


// console.log(typeof(username));

// ARRAY

let anotherUser = ["Yash", true];

// console.log(anotherUser[0])

console.log("1" + 1); // 11

let isValue = true;
console.log(isValue + 1); //true:1 ; 1 + 1 = 2

let digit = "2";
console.log(Number(digit)); // convert "2" => 2

let digit2 = "2abc"
console.log( Number(typeof digit2)); // NaN (Not a number)

console.log(Number(null)) // 0
console.log(Number(undefined)); // NaN


