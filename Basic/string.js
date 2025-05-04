/*
// string
let str = 'ApnaCollege'
console.log(str);
console.log(str.length);

console.log(str[0]);

//template leterals
let names = `My Name is Muhmmad Asif`
console.log(names)

let info = {
    name : 'Asif',
    age : 21,
    cgpa : 3.4
};
console.log(info)
// console.log('name is ', info.name, 'and age is ', info.age)
console.log(`My name is ${info.name} and my age is ${info.age}`)


let str = 'Asif pansuvi'
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim()); // remove white sspaces from starting snd ending of the string
console.log(str.slice(1,4)); //give part of string

console.log(str.replace('Asif','ASIF'));
let str1 = 'Asif';
let str2 = 'pansuvi';
console.log(str1.concat(str2));

console.log(str.charAt(3));

//practice 
userName = prompt("Enter your name!"); */

// console.log("har\"".length)

// practice

// let str = "my name is muhammad  Asif and I am study in university"
// let word = 'asif'
// console.log(`The word ${word} ${str.includes(word) ? 'is' : 'is not'} to the sentence `)

// const str = "To be, or not to be, that is the question.";
// console.log(str.endsWith("question."))
// console.log(str.endsWith("not to be."))
// console.log(str.endsWith("to be", 19)); // true


// const str = "To be, or not to be, that is the question.";

// console.log(str.startsWith("To be")); // true
// console.log(str.startsWith("not to be")); // false
// console.log(str.startsWith("not to be", 10)); // true

let str = 'please give me Rs 1000';
let amount = Number.parseInt(str.slice("please give me Rs ".length))
console.log(amount)
console.log(typeof amount)



