// push, pop, conca, toString, unshift, shift
/*
let superHeroes = ['ironman','spiderman','batman','krish'];
console.log(superHeroes);
superHeroes.push('shaktiman'); //add element at the end of array
console.log(superHeroes);


superHeroes.pop(); // remove element from the end of the array
console.log(superHeroes);

let superHeroes = ['ironman','spiderman','batman','krish'];
console.log(superHeroes.toString()); //convert array's element to string
console.log(superHeroes);

let city1 = ['karachi','Lahore','pindi'];
let city2 = ['Skardu','gilgit'];
console.log(city1.concat(city2)); // concetenate two or more array.

let foodItems = ['kabab','letchi','banana','apple','mango'];
console.log(foodItems);
foodItems.unshift('orange'); // add element at the begining of the array
console.log(foodItems);

let foodItems = ['kabab','letchi','banana','apple','mango'];
foodItems.shift(); // remove element from beginning
console.log(foodItems);
*/
// let arr = [1,2,3,4,5,6,7];
// console.log(arr);
// // arr.splice(2,3,101);//(startInd, No Indx delete,newValue)
// let deletedValue = arr.splice(2,3,101)
// console.log(arr);
// console.log(deletedValue)
// console.log(deletedValue)
// let num = [98,191,324,243,654,546,876]
// // num.sort()//sort alphabatically 

// let compare = (a,b) =>{
//     return a-b;
// }
// num.sort(compare)
// console.log(num)

/*
// Array.from 
let name = "Pansuvi";
let arr = Array.from(name); // create an from array from name
console.log(arr)
*/

// let num = [12,2,31,43,45,54]
// for(let item of num){ //return item of array
//     console.log(item)
// }

// for (let i in num){
//     console.log(i) // return index number of array
// }

// Map()
// let num = [23,54,76,97]
// let a = num.map((value,index,Array) => {
//     console.log(value,index,Array)
//     return value + index;
// })
// console.log(a)

//filter
// let num2 = [11,34,2,76,12]
// let a2 = num2.filter((a)=>{
//     return a < 34;
// })
// console.log(a2)

// reduce
// let num3 = [1,3,2,4,3,5]
// let a3 = num3.reduce((h1,h3)=>{
//     return h1 + h3
// })
// console.log(a3)
// let num3 = [1,3,2,4,3,5]
// const reduce_func = (a,b)=>{
//     return a + b
// }
// newarr = num3.reduce(reduce_func)
// console.log(newarr)