
// function play(){
//     //step-1: hide the home screen.to hide screen add the class hidden to the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)


//     // show the playground
//     const playGroundSection = document.getElementById('play-ground'); 
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    //stop the game if pressed ESC
    if(playerPressed === 'Escape'){
        gameOver()
    }

    //key player is expected to press
    const currentApphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentApphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // console.log('You have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //-----------------------------------
        //update score:
        //1. get the current score

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // const currentScore = getTextElementValueById('current-score');

        // //2. increase the score by 1

        const newScore = currentScore + 1;

        // //3. Show the updated score
        // currentScoreElement.innerText =newScore;


        //start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you missed. lost your life');

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            gameOver()
        }
        //step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //step-2: reduce the life count
        // const newLife =currentLife -1;
        // //step-3: display the life count
        // currentLifeElement.innerText = newLife;
    }

}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet:', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentApphabetElement = document.getElementById('current-alphabet');
    currentApphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}



function play(){
    //hide everything show the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame('');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score')

    //update score
    //1. get the final score
    const lastScore = getTextElementValueById('current-score')
    // console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}