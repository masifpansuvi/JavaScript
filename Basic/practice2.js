//input /*
/* alert('hello!')
result = prompt('hello')
// alert(result)
console.log(result)*/

//Question no 01:
/*
let num = prompt("enter a number");
if (num % 5 === 0){
    console.log(num, 'is a multiple of 5');
}
else{
    console.log(num,'is NOT a multiple of 5')
}
*/

//Question no 02
let grades = prompt('enter your percentage');
if (grades < 100 && grades > 80){
    console.log('congrats, you got A grade')
}
else if(grades < 80 && grades > 70){
    console.log('Nice, you got B grades')
}
else if(grades < 69 && grades > 60){
    console.log('you got C grades')
}
else if(grades < 59 && grades > 50){
    console.log('Nice, you got D grades')
}
else if(grades < 49){
    console.log('Nice, you got F grades')
}

