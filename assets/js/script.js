
document.addEventListener("DOMContentLoaded", function () {
    let buttons = this.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(e) {
        if(e.key === "Enter") {
            checkAnswer();
        }
    })
    runGame("addition");

})


/**
 * The main game "loop", called when the script is first loading
 * and after the users answer has been processed 
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus()

    let num1 = Math.floor(Math.random() * 25) + 1; // random number between 1 and 25
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting`;
    }

}


/**
 * check the answer against the first element in 
 * the return calculateCorrectAnswer array 
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect) {
        alert("Hey you got it right! :D")
        incrementScore()
    } else {
        alert(`awwwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();

    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (he numbers) and the operator (the plus, minus ect)
 * directly from the dom , and returns the correct answers 
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"]
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"]
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"]
    } else if (operator === "/" ) {
        return [operand1 / operand2, "division"]
    } else {
        alert(`unimplemented operator ${operator}`)
        throw `unimplemented operator ${operator}. Aborting`;

    }

}

/**
 * Get the current score from the DOM and increment it by 1
 */

function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore

}


/**
 * Get the current tally of incorrect answers from the DOM and increment it by 1
 */

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}



function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "+"

}



function displaySubtractQuestion(operand1,operand2) {

document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
document.getElementById("operator").textContent = "-";

}



function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById( "operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById( "operator" ).textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {
        operand1 = operand1 * operand2;
    document.getElementById("operand1").textContent = operand1 
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "/";
}