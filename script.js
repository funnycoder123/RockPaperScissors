let computerMove = '';

computerOption = () => {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "Rock";
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "Paper";
    } else if (randomNumber >= 2/3 && randomNumber < 1 ){
        computerMove = "Scissor";
    }

    console.log(computerMove);
}

selectOptionRock = () => {
    computerOption();

    let result = '';

    if (computerMove === "Rock") {
        result = "tie 😅";
    } else if ( computerMove === "Paper" ) {
        result = "You Lose, Try again 😊"
    } else if ( computerMove === "Scissor") {
        result = "You win! 😃"
    } 
    console.log(result);

    document.getElementById("results").innerHTML = "The computer picked " + computerMove + ". " + result;
}

selectOptionPaper = () => {
    computerOption();

    let result = '';

    if (computerMove === "Paper") {
        result = "tie 😅";
    } else if ( computerMove === "Scissor" ) {
        result = "You Lose, Try again 😊"
    } else if ( computerMove === "Rock") {
        result = "You win! 😃"
    } 
    console.log(result);

    
    document.getElementById("results").innerHTML = "The computer picked " + computerMove + ". " + result;
} 

selectOptionScissor = () => {
    computerOption();

    let result = '';

    if (computerMove === "Scissor") {
        result = "tie 😅";
    } else if ( computerMove === "Rock" ) {
        result = "You Lose, Try again 😊"
    } else if ( computerMove === "Paper") {
        result = "You win! 😃"
    } 
    console.log(result);

    
    document.getElementById("results").innerHTML = "The computer picked " + computerMove + ". " + result;
}