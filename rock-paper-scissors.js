// @ts-check

function getComputerChoice() {
    let choice = Math.random()

    if (choice >= 0 && choice < 0.33)
        return "rock"
    else if (choice >= 0.33 && choice < 0.66)
        return "paper"
    else
        return "scissors"
}

let getHumanChoice = () => prompt("Choose rock, paper or scissors")

function playGame() {
    /**
     * @param {string} humanChoice
     * @param {string} computerChoice
     */
    function playRound(humanChoice, computerChoice) {
        const div = document.querySelector("div")
        div.textContent = `You chose ${humanChoice}; Computer chose ${computerChoice}; `
        
        if (humanChoice === computerChoice)
            div.textContent += "Tie!"

        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                div.textContent += "You win!"
                humanScore++
            }
            else {
                div.textContent += "You lost!"
                computerScore++
            }
        }
        
        else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                div.textContent += "You win!"
                humanScore++
            }
            else {
                div.textContent += "You lost!"
                computerScore++
            }
        }

        else {
            if (computerChoice === "rock") {
                div.textContent += "You win!"
                humanScore++
            }
            else {
                div.textContent += "You lost!"
                computerScore++
            }
        }
    }

    let humanScore = 0
    let computerScore = 0

    const rockButton = document.querySelector("#rock")
    const paperButton = document.querySelector("#paper")
    const scissorsButton = document.querySelector("#scissors")

    rockButton?.addEventListener("click", () => playRound("rock", getComputerChoice()))
    paperButton?.addEventListener("click", () => playRound("paper", getComputerChoice()))
    scissorsButton?.addEventListener("click", () => playRound("scissors", getComputerChoice()))
}

playGame()