// object literals

/* How can we use Symbol in Object*/
const mySym = Symbol("key1")

const jsUser = {
    name : "Yash", // name is already defined as like "name"
    age : 17,
    "full name" : "Yash Sathe",
    location : "Pune",
    [mySym] : "mykey1", // to access this : jsUser.[mySym]
    email : "yash@google.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday" , "Saturday"]
}

/*
console.log(jsUser.email);
console.log(jsUser["email"]); // best way to access element from the object
// console.log(jsUser.fullname);  this give error
console.log(jsUser["full name"]);
*/

/*
// FREEZE
Object.freeze(jsUser) // we cannot change the value 
*/

jsUser.greeting = () =>{
    console.log("Hello JS user");    
}
jsUser.greetingTwo = () =>{
    console.log(`Hello JS user , ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());