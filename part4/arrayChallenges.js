/* 1.Declare an array name 'teaFlavour' that contains the strings "green tea" , "black tea", and "oolong tea".
 Access the first element of the array and store it in a variable named 'firstTea' */

let teaFlavors = ["green tea", "black tea"];
let firstTea = teaFlavors[0];
console.log(firstTea);

/*2.Declare an array named 'cities' containning "London" , "Tokyo" , "Paris", and "New York".
Access the the third element in the array and store in a variable name 'favouriteCity'*/
let cities = ["London","Tokyo","Paris","New York"];
let favouriteCity = cities[2];
console.log(favouriteCity); 

/*3. You have nad array named 'teaTypes' containning "herbal tea" , "White tea" , and "masala chai".
Change the second element of array to "jasmine tea". */

let teaTypes = ["herbal tea" , "White tea" , "Masala tea"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

/* 4. Declare an array named 'citiesVisited' conatinning "Mumbai" and "Syndney".
Add "Berlin" to the array using the 'push' method.*/

let citiesVisited = ["Mumbai" , "Syndney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

/*5. You have an array named 'teaOrders' with "chai","iced tea","matcha" and "earl grey".
Remove the last element  of the array using the 'pop' method and store it in variable named 'lastOrder'*/

let teaOrders = ["chai","iced tea","matcha","earl grey"];
let lastOrder = teaOrders.pop();
console.log(teaOrders);

/*6. You have an array named 'popularTeas' conatinning "green tea","oolong tea","chai".
Create a soft copy of this array named 'softCopyTeas'.*/

let popularTeas = ["green tea", "oolong tea" ,"chai"];
let softCopyTeas = popularTeas;
console.log(softCopyTeas);

/*7. You have an array named 'topCities' conatinning "Berlin" , "Singapore" , and "New York".
Create a hard copy of this array named 'hardCopyCities'*/

let topCities = ["Berlin" , "Singapore" , "New York"];
// let hardCopyCities = [...topCities];
let hardCopyCities = topCities.slice();
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

/* 8.You have to arrays: 'europeanCities' containning "Paris" and "Rome" and 'asianCities' containning "Tokyo" and "Bangkok".
Merge these two arrays into new array named 'worldCities'.*/

let europeanCities = ["Paris" , "Rome" ];
let asianCities = ["Tokyo" , "Bangkok"];

let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);

/* 9. You have array named 'teaMenu' containning "masala chai", "oolong tea","green tea",and "eral grey".
find the length of the array and store it in a variable named 'menuLength'.*/

let teaMenu = ["masala chai","oolong tea","green tea","eral grey"]
let menuLength = teaMenu.length;
console.log(menuLength);

/* 10. You have an array named 'cityBucketList' containning "kyoto" , "London" , "Cape Town", and "Vancover".
check if "London" is in the array and store the result in a variable named 'isLondonInList'*/

let cityBucketList = ["kyoto" , "London" , "Cape Town" , "Vancover"];
let isLondonInList = cityBucketList.includes("London");
