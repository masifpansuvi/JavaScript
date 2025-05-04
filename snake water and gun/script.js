
let choice = true;

const computer_choice = () =>{
    let choices = ['S', 'G', 'W']
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
let ComputerChoice = computer_choice()
console.log(`Computer choice is${ComputerChoice}`);

while(choice){
    let my_choice = prompt('Make your choice');
    console.log(my_choice);
    if (my_choice === ComputerChoice){
        alert("game is draw, please play again...")
    }
    if (my_choice == 'W' && ComputerChoice == "G"){
        alert('Water win the game')
    }
    else if (my_choice == 'W' && ComputerChoice == 'S'){
        alert("Snake win the game")
    }
    else if (my_choice == 'G' && ComputerChoice == 'S'){
        alert('Gun win the game')
    }
    else if (my_choice == 'G' && ComputerChoice == 'W'){
        alert('Water win the game')
    }
    else if (my_choice == 'S' && ComputerChoice == 'W'){
        alert('Snake win the game')
    }
    else if (my_choice == 'S' && ComputerChoice == 'G'){
        alert('Gun win the game')
    }
    choice = confirm('Do you want to play again?')
}






// const getComputerChoice = () => {
//     const choices = ['Snake', 'Water', 'Gun'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
//   };
  
//   // Example usage:
//   const computerChoice = getComputerChoice();
//   console.log("Computer's choice:", computerChoice);
  
