// Get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error: Invalid choice. Please choose rock, paper, or scissors.');
    }
};

// Get the computer's choice
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// Determine the winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'User wins by using the secret cheat code!';
    }
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'Computer wins!' : 'User wins!';
    }
    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer wins!' : 'User wins!';
    }
    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Computer wins!' : 'User wins!';
    }
};

// Play the game
const playGame = () => {
    const userChoice = getUserChoice('rock'); // change this to test different inputs
    const computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();
