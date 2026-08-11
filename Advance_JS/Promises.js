/*
const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // Db calls , cryptography , network
    setTimeout(()  =>{
        console.log('Async task is complete');
        resolve() // promise consume karne mhe help karta hae
    },1000)
}); // Promise ban gya
console.log();

//Promise Ko consume Kiya
promiseOne.then(function() {
    console.log("Promise Consumed");
    
})

 
new Promise((resolve , reject) =>{
    setTimeout(() =>{
        console.log("Async Task 2");
        resolve(); // It is important After promise to consume or call the promise
    },1000)
}).then(() =>{
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});


const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Yash", email: "abc@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  }).finally(() => console.log("The Promise either resolved or rejected")
  );


const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", email: "abc@gmail.com" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // it is a object
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}

consumePromiseFive();
*/

/* USING ASYNC*/
// async function getAllusers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); // yhe promise deta hae isley await use kiya

//     const data = await response.json(); // yhe bhi promise deta hae isley await use kiya

//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllusers();

/* USING .then().catch()*/

fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
    return response.json()
}).then((data) =>{
    console.log(data); 
})
.catch((error) =>{
    console.log('E:',error);
    
})