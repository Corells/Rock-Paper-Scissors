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
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`)
        if (humanChoice === computerChoice)
            console.log("Tie!")

        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You win!")
                humanScore++
            }
            else {
                console.log("You lost!")
                computerScore++
            }
        }
        
        else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("You win!")
                humanScore++
            }
            else {
                console.log("You lost!")
                computerScore++
            }
        }

        else {
            if (computerChoice === "rock") {
                console.log("You win!")
                humanScore++
            }
            else {
                console.log("You lost!")
                computerScore++
            }
        }
    }

    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
}

playGame()