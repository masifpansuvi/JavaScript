for (let i = 1; i <= 10; i++) { 
    for( let j = 1; j <= 10; j++){
      //  console.log(`${i} + ${j} = ${i* j}`)
    }
}

//for of loop
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(greet)    
}
const map = new Map();
map.set('pk', 'Pakistan')
map.set('GB', 'Gilgit Baltistan')
map.set('us', 'uited state of america')
// console.log(map) 

for (const [key, val] of map) {
//console.log(key, ":->", val)
}

//object are not iterble by for-of loop
const Object ={
  'game1':'NFS',
  'game2':'MFS',
}
// for (const [key] of Object) {
//  // console.log(key);  
// }
// for-in loop
const myObject = {
  js:'javaScript',
  cpp:'C++',
  py: 'Python',
  rb: 'Ruby' 
}
// for (const keys in myObject) {
//  // console.log(`${keys} shortcut is for ${myObject[keys]}`)
// }

const programming = ['py','cpp','js','rb']
for (const keys in programming) {
//  console.log(programming[keys])
}

// For-Each loop
const coding = ['py','js','cpp','rb','swift']
// coding.forEach( function (items){
//   console.log(items)
// })

// coding.forEach( (items)=>{
//   console.log(items)
// })

// function printMe(items){
//   console.log(items)
// }
// coding.forEach(printMe)

// coding.forEach( (items, index, arr)=>{
//   console.log(items,index,arr)
// })

const myCoding = [
  {
    languageName: 'Javascript',
    languageFileName: 'js'
  }
  ,
  {
    languageName: 'python',
    languageFileName: 'py'
  }
  ,
  {
    languageName: 'Java',
    languageFileName: 'java'
  }
]
myCoding.forEach( (item)=>{
//  console.log(item.languageFileName)
} )




