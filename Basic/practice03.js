// print the even number till 100
for(let num=0;num<=100;num++){
    
    if (num%2 == 0){
        console.log('num =',num);
    }
}

// guess game
let num = 25
let guesnum = prompt('enter your guess!');
while(guesnum != num){
    guesnum = prompt('enter your guess!');
}
console.log('congrants! you guess is right number')