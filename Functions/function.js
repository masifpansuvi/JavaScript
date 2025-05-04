function calTotal(...num1){ // ... is a rest operator
    return num1;
}
const newTotal = calTotal(100,200,300,900,1000);
//console.log(newTotal);
const total = newTotal.reduce( (prev, curr)=>{
    return prev + curr
},0);

//console.log(total);

const user = {
    userName: 'Asif',
    age: 21
}

function userDetail(anyObject){
    console.log(`user Name is ${anyObject.userName} and age is ${anyObject.age}`);
}
//userDetail(user)

// function scope
let a = 10
const b =20
var c = 30

function scope(){
    let a = 10
    //console.log(b);
    var c = 30
}

function one (){
    const userName = 'Asif'
    function two(){
        website = "youtube.com"
        //console.log(userName);
    }
    //console.log(website);
    two()
}
one();


// Arrow function and this

const user1 = {
    useName: 'Hitest',
    price: 999,

    welcomMessege: function(){
        console.log(`${this.useName}, welcome to website`);
        console.log(this);
        // this -> user to call inside scope
    }
}
// user1.welcomMessege();
// user1.useName = 'Asif';
// user1.welcomMessege();





