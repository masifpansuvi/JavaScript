/*
function myName(){
    console.log('Muhammad Asif');
}
myName();

function sum(a,b){
    s = a+ b;
    return s;
}
let val = sum(2,4);
console.log(val);

const arrowSum = (a,b,c)=>{
    console.log(a + b + c);
}
console.log(arrowSum);
*/

// array method --> map-->return new array
let num = [2,4,6,8];

let nums = num.map((val)=>{
    return val * val
})
//console.log(nums);

// array.filter method-->return some value of array based on some condition
let arr = [1,2,3,4,5,6,7,8];

let evenArr = arr.filter((val)=>{
    return (val%2 == 0); // condition

})
//console.log(evenArr);

// reduce method -->give singal output baesd on condition.
let arr1 = [1,2,3,4,21,43,54];
//first element is previous ad second is current
const output = arr1.reduce((prev, curr)=>{ // take two parameter
    return prev > curr ? prev : curr; // condtion 
    return prev + curr;
}, 0);
//console.log(output);














