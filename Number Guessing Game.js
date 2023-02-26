/************************************************************** */
const rangeText = document.querySelector("#h3");
const message = document.querySelector(".message");
const result = document.querySelector("#result-greet");
const genNumber = document.querySelector("#generatedNumber");
const guessNumber = document.querySelector("#guessingNumber");
const lose = document.querySelector("#lose");
const won = document.querySelector("#won");
const zeroToHundred = document.querySelector("#zeroToHundred");
const oneToNine = document.querySelector("#oneToNine");
const aToJ = document.querySelector("#aToJ");
const restartGame = document.querySelector(".restart-game");
const outputBtn1 = document.querySelector("#btn-output-1");
const outputBtn2 = document.querySelector("#btn-output-2");
const outputBtn4 = document.querySelector("#btn-output-4");
const inputText1 = document.querySelector(".inputText-1");
const inputText2 = document.querySelector(".inputText-2");
const inputText4 = document.querySelector(".inputText-4");
const numInput1 = document.querySelector("#num-input-1");
const numInput2 = document.querySelector("#num-input-2");
const numInput4 = document.querySelector("#num-input-4");
/*-------------RANGE-AND-EVENT-LISTENER------------------- */
zeroToHundred.addEventListener("click", function () {
    zeroToHundred.style.display = "block";
    oneToNine.style.display = "none";
    aToJ.style.display = "none";
    inputText1.style.display = "block";
    inputText2.style.display = "none";
    inputText4.style.display = "none";
    rangeText.innerText = "Range For Play Game";
});
oneToNine.addEventListener("click", function () {
    oneToNine.style.display = "block";
    zeroToHundred.style.display = "none";
    aToJ.style.display = "none";
    inputText1.style.display = "none";
    inputText2.style.display = "block";
    inputText4.style.display = "none";
    rangeText.innerText = "Range For Play Game";
});
aToJ.addEventListener("click", function () {
    aToJ.style.display = "block";
    zeroToHundred.style.display = "none";
    oneToNine.style.display = "none";
    inputText1.style.display = "none";
    inputText2.style.display = "none";
    inputText4.style.display = "block";
    rangeText.innerText = "Range For Play Game";
});
restartGame.addEventListener("click", function () {
    const restart = confirm("Are you sure, to restart game?");
    if (restart) {
        zeroToHundred.style.display = "block";
        oneToNine.style.display = "block";
        aToJ.style.display = "block";
        inputText1.style.display = "none";
        inputText2.style.display = "none";
        inputText4.style.display = "none";
        numInput1.value = "";
        numInput2.value = "";
        numInput4.value = "";
        rangeText.innerText = "Select Range For Play Game";
    }
});
outputBtn1.addEventListener("click", function () {
    let randomNumber = (Math.floor(Math.random() * 3)+1);
    let inputValue = numInput1.value;
    if (inputValue >= 1 && inputValue <= 3) {
        if (inputValue == randomNumber) {
            message.style.display = "block";
            result.innerText = "Hurrah ! You won";
            won.play();
            lose.pause();
            result.style.color = "green";
            genNumber.innerText = `Generated Number is ${randomNumber}`;
            guessNumber.innerText = `Your Guessing Number is ${inputValue}`;
        } 
        else if (inputValue == "") {
            alert("Maharaj ji ! pahle app kuchh to likhiye |");
        }
         else {
            message.style.display = "block";
            result.innerText = "oops ! you lose";
            lose.play();
            won.pause();
            result.style.color = "red";
            genNumber.innerText = `Generated Number is ${randomNumber}`;
            guessNumber.innerText = `Your Guessing Number is ${inputValue}`;
        }
    } else {
        alert("Please see the range first, then try again!");
    }
    numInput1.value = "";
});
outputBtn2.addEventListener("click", function () {
    let randomNumber = Math.floor((Math.random() * 9)+1);
    let inputValue = numInput2.value;
    if (inputValue >= 1 && inputValue <= 9) {
        if (inputValue == randomNumber) {
            message.style.display = "block";
            result.innerText = "Hurrah ! You won";
            won.play();
            lose.pause();
            result.style.color = "green";
            genNumber.innerText = `Generated Number is ${randomNumber}`;
            guessNumber.innerText = `Your Guessing Number is ${inputValue}`;
        } else if (inputValue == "") {
            alert("Maharaj ji ! pahle app kuchh to likhiye |");
        } else {
            message.style.display = "block";
            result.innerText = "oops ! you lose";
            lose.play();
            won.pause();
            result.style.color = "red";
            genNumber.innerText = `Generated Number is ${randomNumber}`;
            guessNumber.innerText = `Your Guessing Number is ${inputValue}`;
        }
    } 
    else {
        alert("Please see the range first, then try again!");
    }
    numInput2.value = "";
});
outputBtn4.addEventListener("click", function () {
    let character = ['A','B','C','D','E','F','G','H','I','J','a','b','c','d','e','f','g','h','i','j'];
    let randomNumber = Math.floor((Math.random() * 52));
    let charInput = character[randomNumber];
    let charVal = numInput4.value;
    if((charVal >= 'a' && charVal <= 'j') || (charVal >= 'A' && charVal <= 'J')){
        if (charVal == charInput) {
            message.style.display = "block";
            result.innerText = "Hurrah ! You won";
            won.play();
            lose.pause();
            result.style.color = "green";
            genNumber.innerText = `Generated Number is ${charInput}`;
            guessNumber.innerText = `Your Guessing Number is ${charVal}`;
        }
        else{
            message.style.display = "block";
            result.innerText = "oops ! you lose";
            lose.play();
            won.pause();
            result.style.color = "red";
            genNumber.innerText = `Generated Number is ${charInput}`;
            guessNumber.innerText = `Your Guessing Number is ${charVal}`;
       }
    }
    else if (charVal == "") {
        alert("Maharaj ji ! pahle app kuchh to likhiye |");
    }
    else {
        alert("Please see the range first, then try again!");
    }
    numInput4.value = "";
});
/******************************************************* */
