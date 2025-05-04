/*
// display number from 1 to prompted number
let num = prompt('enter an integer!')
let i =1;
while(i<=num){
    console.log(i)
    i++;
}

// find factorial using loop
let numb = prompt("Enter an integer!");
let fact = 1
for(let i=1;i<=numb;i++){
    fact = fact * i;
}
console.log(`factorial is ${fact}`)


// fibonacci series
let n = prompt('enter a number!');

let n1 = 0;
let n2 = 1;
let nextTerm;
for (let i=0;i<=n;i++){
    console.log(n1)
    nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm;
}


// lagest number
let n = prompt("enter an integer!")
let largest = 0;
for (let i=1;i<=n;i++){
    console.log(i)
    if (i > largest ){
        largest = i;
    }

}
console.log(`largest is ${largest}`)
*/
for (let i=1;i<=5;i++){
    console.log(i);
    for(let j=i;j<=i;j++){
        console.log(j);
    }
    console.log('\n');
}

















