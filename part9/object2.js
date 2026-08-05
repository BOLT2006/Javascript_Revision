const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoogedIn = true

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userFullname :{
            firstname : "Yash",
            lastname : "Sathe"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = { obj1 , obj2}; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

/* Object.assign(target , source) 
const obj3 = Object.assign({},obj1 , obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }       
*/
/*
const obj3 = {...obj1 , ...obj2}

console.log(obj3);
*/
const course  = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "hitesh"
}
/*
// course.courseInstructor
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);
*/

/* JASON 

{
    "name" : "hitesh",
    "coursename" : "js in hindi",
    "price": "999"
}
    */
      
   