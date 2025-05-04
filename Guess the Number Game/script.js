let randomNum = Math.floor(Math.random() * 100)
console.log(randomNum)

// // let myChoice = prompt("enter your choice.")
// // console.log(myChoice)



// // while(randomNum != myChoice){
// //     if(randomNum > myChoice){
// //         console.log(`${myChoice} is smaller then ${randomNum}`)
// //         myChoice = prompt("enter your choice.")
// //         console.log(myChoice)
        
// //     }
// //     else{
// //         console.log(`${myChoice} is Bigger then ${randomNum}`)
// //         myChoice = prompt("enter your choice.")
// //         console.log(myChoice)
// //     }    
// // }
// // if (randomNum == myChoice){
// //     console.log(`Congratualtion, ${myChoice} is equal to ${randomNum}`)
// // }

// // if (randomNum == myChoice){
// //     console.log(`Congratualtion, ${myChoice} is equal to ${randomNum}`)
// // }
// // else{
// //     if(randomNum > myChoice){
// //         console.log(`${myChoice} is smaller then ${randomNum}`)
// //         myChoice = prompt("enter your choice.")
// //         console.log(myChoice)
// //     }
//     // else{
//     //     console.log(`${myChoice} is Bigger then ${randomNum}`)
//     //     myChoice = prompt("enter your choice.")
//     //     console.log(myChoice)
//     // }    
// // }
let choices = 0;
function guestRndNum(){
    let userInput = parseInt(prompt('Enter your choice.0'))
    choices++;

    if (randomNum == userInput){
        console.log(`Congratualtion, ${userInput} is equal to ${randomNum}`)
    }
    else{
        if(randomNum > userInput){
            console.log(`${userInput} is smaller then ${randomNum}`)
            guestRndNum()
        }
        else{
            console.log(`${userInput} is Bigger then ${randomNum}`)
            guestRndNum()
        }   
    }
}
guestRndNum();
console.log(`The number found in ${choices} choices`)




