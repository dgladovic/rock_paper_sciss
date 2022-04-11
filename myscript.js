let playerSelection = '';
let computerSelection = computerPlay();

let win = 0;
let lose = 0;

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

const menu = document.querySelectorAll("button");
menu.forEach((entry) =>{
    entry.addEventListener('click', ()=>{
        playerSelection = entry.id;
        computerSelection = computerPlay();
        game();
        results.textContent = `${win} : ${lose}`;
        endgame();
    });
});

const results = document.querySelector('.results');
const finale = document.createElement('p');


function game(){
let score = playRound();    
    if(score.slice(0,7) == "You Win"){
        win++;
    }
    else{
        lose++;
   }    
};

function endgame(){

    if (win+lose == 5){
        if (win == lose){
            finale.textContent = "It's a tie! IMPOSSIBLE"
            results.appendChild(finale);
            win = 0;
            lose = 0;
        }
        else if (win > lose){
            finale.textContent = "You won."
            results.appendChild(finale);
            win = 0;
            lose = 0;}
        else{
            finale.textContent = "You lost."
            results.appendChild(finale);
            win = 0;
            lose = 0;
        }        
    }
};
    




