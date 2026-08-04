// filter : It return if the condition is true or flase

const myNums = [1,2,3,4,5,6,7,8,9,10];
/*
const newNums = myNums.filter((num) => {
   // num > 4   output : [] if we open scope then we have to use return
   return num > 4
})

const newNums = [];
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);
 */

 const books = [
  {
    title: 'Book One',
    genre: 'Fiction',
    publish: 1981,
    edition: 2004
  },
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008
  },
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Six',
    genre: 'Fiction',
    publish: 1987,
    edition: 2010
  },
  {
    title: 'Book Seven',
    genre: 'Biography',
    publish: 1995,
    edition: 2005
  },
  {
    title: 'Book Eight',
    genre: 'Fantasy',
    publish: 2012,
    edition: 2018
  },
  {
    title: 'Book Nine',
    genre: 'Technology',
    publish: 2020,
    edition: 2022
  },
  {
    title: 'Book Ten',
    genre: 'Mystery',
    publish: 2003,
    edition: 2009
  },
  {
    title: 'Book Eleven',
    genre: 'Romance',
    publish: 2015,
    edition: 2021
  }
]; 

/* const userBooks = books.filter((bk) => bk.genre == 'History') 
const userBooks = []
books.forEach((bk) => {
    if(bk.genre == "History") {
        userBooks.push(bk);
    }
})

const userBooks = books.filter((bk) => bk.publish > 2000)
*/
const userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre == 'History' )
console.log(userBooks);
