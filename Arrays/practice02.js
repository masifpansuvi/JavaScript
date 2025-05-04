/*

//by for-of-loop
let itemPrice = [250,645,300,900,50];
let i=0;
for(let val of itemPrice){
    let offer = val/10;
    itemPrice[i] = itemPrice[i] - offer;
    // console.log(`Priceafter offer is ${itemPrice[i]}`);
    i++;
}
console.log(itemPrice);

//by for loop
let items = [250,645,300,900,50];
for(let i=0;i<items.length;i++){
    let offer1 = items[i]/10;
    items[i] = items[i] - offer1;
    // console.log(`price after 10% off offer is ${items[i]}`);
}
console.log(items);


*/

// let companies = ['Bloomberg','Miscrosoft','Google','Uber','IBM','Netflix']
// console.log(companies);

// companies.shift(); //remove first item
// console.log(companies);

// companies.splice(3,1,'Ola');
// console.log(companies);

// companies.push('Amazon');
// console.log(companies);

/*
// add a number in array

let arr = [2,1,43,52,12]
let newnum = prompt('enter your number.')
newnum = Number.parseInt(newnum)
arr.push(newnum)
console.log(arr)
*//*
//add a number in array until enter 0
let arr = [2,1,3,4,5]

do {
    a = prompt('enter an integer')
    a = Number.parseInt(a)
    arr.push(a)
    
}while(a!=0);
console.log(arr)*/
/*
//filter number of divisible by 10
let arr1 = []
let i = 10;
for(let j=0; j<i; j++){
    let num = prompt("enter en integer.")
    num = Number.parseInt(num)
    arr1.push(num)
    console.log(arr1)
}
console.log(arr1)
const newarr = arr1.filter((a)=>{
    return a%10==0;
})
console.log(newarr)
*//*
//square of item of array

let arr1 = []
let i = 5;
for(let j=0; j<i; j++){
    let num = prompt("enter en integer.")
    num = Number.parseInt(num)
    arr1.push(num)
}

console.log(arr1)
const newArr = arr1.map((val)=>{
    return val * val
})
console.log(newArr)*/

// use reduce to find fctorial of value

let num = prompt('enter an integer.')
console.log(num)
num = Number.parseInt(num)

let newArr = [1]
for (let i=1; i<num; i++){
    newArr.push(i)
}
console.log(newArr)

const res = newArr.reduce((h1,h2)=>{
    return h1 * h2
})
console.log(res)







