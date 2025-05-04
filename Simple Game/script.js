let user_Score = 0;
let comp_Score = 0;


const choices = document.querySelectorAll('.choice')
let msg = document.querySelector('.msg-content')
// let userScore = document.querySelector('#user-score'); 
// let compScore = document.querySelector('#comp-score'); 

//add eventlistener to each class to get user choice
choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice)
    })
})

//code to execute when game is draw
const drawGame = () =>{
    console.log('game is Draw')
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#081b31"
}

// play game all logic is here
let playGame = (userChoice,) =>{
    console.log('userChoice = ',userChoice);
    const compChoice = genCompChoice();
    console.log('Comp choice = ',compChoice)
    //check cosidtion
    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //paper, scissors
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            //rock, scissor
            userWin =  compChoice === 'rock' ? true : false;
        }else{
            // paper rock
            userWin = compChoice === 'paper' ? true : false;
        }
        showWin(userWin);
    }
}

//Game result is here
const showWin = (userWin) =>{
    if(userWin){
        msg.innerText = "You Win! Congratulation";
        msg.style.backgroundColor = "green";
        const userScore = document.querySelector('#user-score').innerText = user_Score++;
        console.log('you win')
    }else{
        msg.innerText = "You Lose! Try Again";
        msg.style.backgroundColor = "red";
        const compScore = document.querySelector("#comp-score").innerText = comp_Score++;
        console.log('you lose')
    }
}

//code to get computer choice
let genCompChoice = () =>{
    const options = ['rock','paper','scissor']
    let ramIdx = Math.floor(Math.random() * 3);
    return options[ramIdx];
}

