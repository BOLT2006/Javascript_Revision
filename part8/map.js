/* MAPS : it return all type of value */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10 )

/* CHANNING */
const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1);

console.log(newNums);
