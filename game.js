let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
   const randIdx =  Math.floor(Math.random() * 3);
   return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Draw Game😀 Play again🤗";
    msg.style.backgroungColor = "#081b31";
}

const showWinner = (userWin) => {
if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You win!💖";
msg.style.backgroungColor = "green"
} else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lose😥";
    msg.style.backgroungColor = "red";


}
}


const playGame = (userCohioce) =>{
    console.log("user choice = " , userCohioce);
    const compCohioce = genComputerChoice();
    console.log("comp choice = " , compCohioce);
   
    if(userCohioce === compCohioce){
drawGame();
    }else{
     let userWin = true;
     if(userCohioce === "rock"){
userWin = compCohioce === "paper" ? false : true;
     } else if(userCohioce === "paper"){
        userWin = compCohioce === "scissors" ? false : true;
     } else{
        userWin = compCohioce === "rock" ? false : true;
     }
     showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const usercohioce = choice.getAttribute("id");
        playGame(usercohioce);
    });
});