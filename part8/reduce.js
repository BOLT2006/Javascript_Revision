 const myNums = [1,2,3]
/*
 const myTotal = myNums.reduce(function (acc , currval) {
    console.log(`acc : ${acc} curvrval : ${currval}`);
    return acc + currval
 } , 0)

const myTotal = myNums.reduce( (acc,currval) => (acc + currval))
 console.log(myTotal);
  */
 const shoppingCart = [
    {
        item : "py course",
        price : 999
    },
    {
        item : "java course",
        price : 1999
    },
    {
        item : "mobile dev course",
        price : 5999
    },
    {
        item : "data science course",
        price : 12999
    }
 ]
 const priceTotal = shoppingCart.reduce((acc ,item) => acc + item.price , 0)
 console.log(priceTotal);
 