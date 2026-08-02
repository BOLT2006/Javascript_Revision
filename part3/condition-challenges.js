// checking if a number is greater than another number

let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
}
else {
    console.log(`${num2} is greater than ${num1}`);
    
}

// 2. checking is a string is equal to another string
let userName1 = "yash"
let userName2 = "yash"

if (userName1 == userName2) {
    console.log("Pick another username")
}

//3. checking if a variable is a number or not:
let score = 44

if (typeof(score) === 'number') { // we use  '===' to check the datatype also
    console.log('Hello');   
}