const rock="rock";
const paper="paper";
const scissors="scissors";

let player_choice;
let computer_choice; 

let result =""; 
let player_score=0;
let computer_score=0;

function getComputerChoice(){ 
   let comp_choice = Math.floor((Math.random() * 3) + 1);

   if (comp_choice==1){ 
        comp_choice="rock";
   } else if (comp_choice==2){ 
        comp_choice="paper";
   } else if (comp_choice==3){ 
        comp_choice="scissors";
   }

    return comp_choice;
}

function playRound(player_choice, computer_choice){ 

    if (player_choice == computer_choice){ 
        result = "draw";
    }

    switch(player_choice){ 
        case "rock": 
            if (computer_choice==scissors){ 
                result="win";
                player_score++;
            } else if (computer_choice==paper){ 
                result="lose";
                computer_score++;
            }
        break;
    
        case "paper": 
            if (computer_choice==scissors){ 
                result="lose";
                computer_score++;
            } else if (computer_choice==rock){ 
                result="win";
                player_score++;
            }
        break;
    
        case "scissors": 
            if (computer_choice==rock){ 
                result="lose";
                computer_score++;
            } else if (computer_choice==paper){ 
                result="win";
                player_score++;
            }
        break;
    }
    console.log(player_score);
    console.log(computer_score);
    return result;
} 
function game(){
    do {
    player_choice=prompt("choose your weapon");
    computer_choice=getComputerChoice();
    console.log(playRound(player_choice, computer_choice));
    } while (player_score <5 && computer_score <5);
}
game();