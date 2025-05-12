
document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button")

  for (let button of buttons) {
    button.addEventListener("click", function() {
        if(this.getAttribute("data-type") === "submit") {
            alert("you clicked Submit");
        } else {
            let gameType = this.getAttribute("data-type")
            alert(`you clicked ${gameType}`);
        }
    })
  }
})


/**
 * The main game "loop", called when the script is first loading
 * and after the users answer has been processed 
 */
function funGame() {

let num1 = Math.floor(Math.random() * 25) + 1;// random number between 1 and 25
let num2 = Math.floor(Math.random() * 25) + 1; 

} 



function checkAnswer() {

}

 function calculateCorrectAnswer(){

 }



 function incrementScore() {

 }



  function incrementWrongAnswer() {
    
 }



 function displayAdditionQuestion() {

 }



 function displaySubtractQuestion() {

 }



 function displayMultiplyQuestion() {

 }
