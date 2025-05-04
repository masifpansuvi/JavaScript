// age bt 10 and 20
/*
let age = prompt('what is your age???')
if (age < 20 && age > 10){
    console.log('Your age is bet 10 and 20')
}
else {
    console.log('Your age is not bet 10 and 20')
}

// check number is divisible by 2 and 3

let num = prompt('enter number')
if (num % 2 === 0){
    console.log('number is divisible by 2')
}
if (num % 3 === 0){
    console.log('number is divisible by 3')
}
else{
    console.log('Number is not divisible by 2 and 3')
}


//print std result using for loop

let marks = {
    Asif: 92,
    Mushahid: 89,
    Aqib: 95
 }
// for (let i=0;i<Object.keys(marks).length;i++){
//     console.log('marks of', Object.keys(marks)[i], 'is', Object.values(marks)[i])
// }

for (let key in marks){
    console.log(marks[key])
}


// take prompt untill you enter correct number

let cn = 4;
let i;
while(i != cn){
    console.log('Try again');
    i = prompt('enter a number');
}
console.log('you enter correct number');
*/

// make a function to find a mean of a five number
let mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))

