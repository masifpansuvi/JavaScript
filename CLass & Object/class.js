
// prototype in js
const fruits = {
    name : 'Mango',
    price : 150,
    calcPrice : function(){
    console.log('Price is 60 per kg')
    }
}

let veges = {
    name : 'potato',
    price : 60
}
let veges1 = {
    name : 'potato',
    price : 60
}
let veges2 = {
    name : 'potato',
    price : 60
}

veges.__proto__ = fruits;
/*
// Class in JS 
class ToyotaCar {
    constructor(color){
        this.color = color
        console.log(color)
        console.log('start and stop')
    }
    start(){
        console.log('Start')
    }
    stop(){
        console.log('stop')
    }
}
let myCar = new ToyotaCar('blue');
*/
// Inheritence in js
/*
class Person {
    constructor(){
        this.age = 21;
    }
    eat(){
        console.log("Eat")
    }
    sleep(){
        console.log('sleep')
    }
}
class Engg extends Person {
    constructor(name){
        super(); 
        this.name = name;      
    }
    work(){
        super.eat();
        console.log('solved problems, build somethings')
    }
}
let obj = new Person();
let obj1 = new Engg('AsifP');
*/



