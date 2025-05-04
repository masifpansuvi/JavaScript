/*
//take a string and give the no of vowels in it.
function countVowels(str){
    console.log(str);
    let count = 0;
    for (let char of str){
        if (char ==='a'|| char === 'e' || char === 'i' || char ==='o'||char ==='u'){
            count++;
        }
    }
    return count;
}
let val = countVowels('apnacollegeiou');
console.log(val);
/**/ /*
const countVowel = (str)=>{
    let count = 0;
    for (let char of str){
        if (char ==='a'|| char === 'e' || char === 'i' || char ==='o'||char ==='u'){
            count++;
        }
    }
    return count;
}
console.log(countVowel)



// find the square of each item of array.
let arr1 = [2,3,4,5,6,7]
arr1.forEach(sqr=(val)=>{
    
    let sqrt = val * val
    console.log(`square of ${val} is ${sqrt}`);
})
*/

/* new practice *//*
//return neww array of marks above 90
let markArr = [81,79,91,90,87,94,69,96];

let largMarks =  markArr.filter((marks)=>{
    return marks >= 90;
})
console.log(largMarks)
*/
/*
// practice 2 take a number and (i)sum of all number (ii) multiply all number/
let num = prompt('Enten a number!')
let numArr = []
for(let i=1;i<=num;i++){
    numArr.push(i);
}
console.log(numArr);
let sumArr = numArr.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(sumArr);

let mulArr = numArr.reduce((pre, cur)=>{
    return pre * cur;
})
console.log(mulArr);
*/

//take any number  and find its square
/* 
let num = prompt('enter a non zero number!')
console.log(num);
function calcSquare(num1){
    return num1 * num1;
}
let numb = calcSquare(num)
console.log(numb)*/
/*

//Take a number array and find squar eof all its element;
let numb = prompt('enter a number');
console.log(numb);

let arrNum = [];
for (let i=0; i<=numb; i++){
    arrNum[i] = i;
}
console.log(arrNum);
function calcSqr(arrNumb){
    let i=0;
    newArr = []
    for(let num of arrNumb){
        newArr[i] = num * num;
        i++;
    }
    return newArr;
}
calcSqr(arrNum);
console.log(newArr);
*/

//get three integer input and them and find average 
/*

let num1 = prompt('Enter num1');
let num2 = prompt('Enter num2');
let num3 = prompt('Enter num3');
console.log(num1,num2,num3)

function calcAvg(n1,n2,n3){
    const sum = n1 + n2 + n3;
    let avg = sum/3;
    console.log(avg);
}
calcAvg(num1,num2,num3)
*/

// 
/*
 
let runAgain = true;

const canDrive = (age) =>{
    return age>=18?true:false;
}
while(runAgain){
    let age = prompt("Enter your age???")
    console.log(age)
    if(age < 0){
        console.error("please enter valid enter")
        break;
    }
    
    if(canDrive(age)){
        alert("you can Drive")
    }else{
        alert('you can not drive')
    }
    runAgain  = confirm("Do you want to play again?")
}


// redirect to google.com by enter number greater then 4

let numb = prompt("enter your number.")
numb = Number.parseInt(numb)

if(numb > 4){
    location.href = "https://google.com"
}
*/

//change background color baes on user input

let color = prompt("enter color")
document.body.style.backgroundColor = color;









