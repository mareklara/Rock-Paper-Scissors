let playerScore = 0;
let pcScore = 0;

// Instructions
const instructions = document.querySelector("#instructions");

// score points board
const playerPoints = document.querySelector("#player-points");
const pcPoints = document.querySelector("#points-pc");

// message choices
const messageDiv = document.querySelector(".message");
const electionPlayer = document.querySelector("#election-player");
const electionPc = document.querySelector("#election-pc");

// you won a point message
const wonPoint = document.querySelector("#won-point");

// weapon Box
const weaponBox = document.querySelector("#weapons-box")
const weaponsContainer = document.querySelector(".weapons-container")

// weapon btn
const weaponBtn = document.querySelectorAll(".weapon-btn")

// restart button
const restartBtn = document.querySelector(".restart")

weaponBtn.forEach( buttons =>{
    buttons.addEventListener("click", startGame)
})

function startGame(e){
    
    pcChoice = Math.floor(Math.random()* 3)
    playerChoice = e.currentTarget.id
    
    
    // rock => 0
    // paper => 1
    // scissors => 2

    if(pcChoice === 0){
        pcChoice = "rock"
    }else if(pcChoice === 1){
        pcChoice = "paper"
    }else(pcChoice = "scissors")

    // rock > scissors
    // paper > rock
    // scissors > paper

    if (
        (playerChoice === "rock" && pcChoice === "scissors") ||
        (playerChoice === "paper" && pcChoice === "rock") ||
        (playerChoice === "scissors" && pcChoice === "paper") 
    ){
        playerWinsPoint();
    } else if(
        (pcChoice === "rock" && playerChoice === "scissors") ||
        (pcChoice === "paper" && playerChoice === "rock") ||
        (pcChoice === "scissors" && playerChoice === "paper")

    ){
        pcWinsPoint();
    }else{
        tied();
    }

    messageDiv.classList.remove("disabled")
    electionPlayer.innerText = playerChoice
    electionPc.innerText = pcChoice

    if(playerScore === 5 || pcScore === 5){
        if(playerScore === 5){
            instructions.innerText = "Player Won The Game 🔥"
        }

        if(pcScore === 5){
            instructions.innerText = "PC won the game 😭"
        }
        weaponBox.classList.add("disabled");
        restartBtn.classList.remove("disabled")
        
    }

    restartBtn.addEventListener("click", restartGame)

}

function playerWinsPoint(){
    playerScore++
    playerPoints.innerText = playerScore
    wonPoint.innerText = "You Won a Point🔥"
}

function pcWinsPoint(){
    pcScore++
    pcPoints.innerText = pcScore
    wonPoint.innerText = "The PC won a point 😭"
}

function tied(){
    wonPoint.innerText = "I'ts a tied😂"
}

function restartGame(){
    restartBtn.classList.add("disabled")
    messageDiv.classList.add("disabled")
    weaponBox.classList.remove("disabled")

    playerScore = 0;
    pcScore = 0;
    playerPoints.innerText = playerScore
    pcPoints.innerText = pcScore

    instructions.innerText = "First to get to 5 points wins!"
}