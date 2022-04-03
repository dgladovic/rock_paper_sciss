let playerSelection = prompt("Rock,Paper,Scissors?","rock");
let computerSelection = computerPlay();

let a = computerPlay();


console.log(game());


function computerPlay(){
    let result = Math.random()*10;
    if(result <=3){
        return "rock";
    }
    else if(result > 3 && result <=6){
        return "paper";
    }
    else{
        return "scissors";
    }
};

function playRound(){
    if(playerSelection.toLowerCase() == computerSelection){
            return "It\'s a tie!";
    }
    else if(playerSelection.toLowerCase() =='rock'){
        if(computerSelection =='scissors'){
            return "You Win! Rock beats Scissors."; 
        }
        else{
            return "You Lose! Paper beats Rock."
        }
    }
    else if(playerSelection.toLowerCase() =='scissors'){
        if(computerSelection =='paper'){
            return "You Win! Scissors beats Paper."; 
        }
        else{
            return "You Lose! Rock beats Scissors."
        }
    }
    else if(playerSelection.toLowerCase() =='paper'){
        if(computerSelection =='rock'){
            return "You Win! Paper beats Rock."; 
        }
        else{
            return "You Lose! Scissors beat Paper."
        }
    }
};

function game(){
let win = 0;
let lose = 0;
    for(let i = 0; i<5;i++){
        computerSelection = computerPlay();
        let score = playRound();
        
        console.log(win);
        console.log(computerSelection);

        if(score.slice(0,7) == "You Win"){
            win++;
        }
        else{
            lose++;
        }    
    }
    if (win == lose){
        return "It's a tie! IMPOSSIBLE"
    }
    else if (win > lose){
        return "You won."
    }
    else{
        return "You lost."
    }
};




