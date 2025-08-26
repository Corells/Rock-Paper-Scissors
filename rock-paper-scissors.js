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

function playGame() {
    function removeButtons() {
        rockButton?.remove()
        paperButton?.remove()
        scissorsButton?.remove()
    }

    /**
     * @param {string} humanChoice
     * @param {string} computerChoice
     */
    function playRound(humanChoice, computerChoice) {
        div.textContent = `You: ${humanChoice}; Computer: ${computerChoice}; `
        
        if (humanChoice === computerChoice)
            div.textContent += "Tie!; "

        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                div.textContent += "You win!; "
                humanScore++
            }
            else {
                div.textContent += "You lost!; "
                computerScore++
            }
        }
        
        else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                div.textContent += "You win!; "
                humanScore++
            }
            else {
                div.textContent += "You lost!; "
                computerScore++
            }
        }

        else {
            if (computerChoice === "rock") {
                div.textContent += "You win!; "
                humanScore++
            }
            else {
                div.textContent += "You lost!; "
                computerScore++
            }
        }

        if (humanScore == MAX_SCORE) {
            div.textContent = `You won ${MAX_SCORE} rounds! Congratulations! Final Score: ${humanScore}-${computerScore}`
            removeButtons()
            return
        }

        if (computerScore == MAX_SCORE) {
            div.textContent = `You lost ${MAX_SCORE} rounds! Too bad! Final Score: ${humanScore}-${computerScore}`
            removeButtons()
            return
        }

        div.textContent += `Current Score: ${humanScore}-${computerScore}`
    }

    const MAX_SCORE = 5
    let humanScore = 0
    let computerScore = 0

    const rockButton = document.querySelector("#rock")
    const paperButton = document.querySelector("#paper")
    const scissorsButton = document.querySelector("#scissors")
    const div = document.querySelector("div")

    rockButton?.addEventListener("click", () => playRound("rock", getComputerChoice()))
    paperButton?.addEventListener("click", () => playRound("paper", getComputerChoice()))
    scissorsButton?.addEventListener("click", () => playRound("scissors", getComputerChoice()))
}

playGame()