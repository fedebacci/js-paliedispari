// * ATTENZIONE: SPOSTO QUI LE ARROW FUNCTION PERCHE PERDONO L'HOISTING, QUINDI SONO NON DEFINITE SE LE LASCIO IN FONDO

// function generateRandomNumber (max, min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// * ARROW FUNCTION
// const generateRandomNumber = (max, min) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// * ARROW FUNCTION CON RETURN IMPLICITO
const generateRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;


// * ARROW FUNCTION CON RETURN IMPLICITO
// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// };
// * NB: QUESTA FUNZIONE, SICCOME SOMMO SEMPRE LE STESSE DUE VARIABILI, NON SERVE
// * POSSO PASSARE DIRETTAMENTE LA SOMMA DELLE DE VARIABILI COME PARAMETRO
// const sumNumbers = (firstNumber, secondNumber) => firstNumber + secondNumber;
    
// function checkIfOddOrEven(number) {
//     return number % 2 === 0 ? 'pari' : 'dispari';
// };
// * ARROW FUNCTION CON RETURN IMPLICITO
const checkIfOddOrEven = (number) => number % 2 === 0 ? 'pari' : 'dispari';







// * TODO: UTILIZZARE QUESTI VALORI PER MODIFICARE GLI ATTRIBUTI DELL'INPUT SENZA DOVER MODIFICARE HTML
const maxNumber = 5;
const minNumber = 1;
const startValue = generateRandomNumber(maxNumber, minNumber);

const numberInput = document.getElementById('userNumber');
numberInput.value = startValue;
numberInput.max = maxNumber;
numberInput.min = minNumber;

const minNumberPlaceholder = document.getElementById('minNumberPlaceholder');
const maxNumberPlaceholder = document.getElementById('maxNumberPlaceholder');
minNumberPlaceholder.innerText = minNumber;
maxNumberPlaceholder.innerText = maxNumber;

const showResults = document.getElementById('showResults');
const showScore = document.getElementById('showScore');
let userScore = 0;
let computerScore = 0;

const btnPlayOddOrEven = document.getElementById('playOddOrEven');
btnPlayOddOrEven.addEventListener('click', playOddOrEven);






function playOddOrEven() {
    console.clear();

    const userChoice = document.querySelector('input:checked').id;
    console.debug("userChoice", userChoice);
    let userNumber = parseInt(numberInput.value);
    console.debug("userNumber", userNumber);
    
    if (isNaN(userNumber) || userNumber < minNumber || userNumber > maxNumber) return alertInputError(userNumber, minNumber, maxNumber, numberInput);
    
    const computerNumber = generateRandomNumber(maxNumber, minNumber);
    console.debug("computerNumber", computerNumber);
    
    // * NB: QUESTA FUNZIONE, SICCOME SOMMO SEMPRE LE STESSE DUE VARIABILI, NON SERVE
    // * POSSO PASSARE DIRETTAMENTE LA SOMMA DELLE DE VARIABILI COME PARAMETRO
    // const sum = sumNumbers(userNumber, computerNumber);
    // console.debug("sum", sum);
    
    // * NB: QUESTA FUNZIONE, SICCOME SOMMO SEMPRE LE STESSE DUE VARIABILI, NON SERVE
    // * POSSO PASSARE DIRETTAMENTE LA SOMMA DELLE DE VARIABILI COME PARAMETRO
    // const isOddOrEven = checkIfOddOrEven(sum);
    const isOddOrEven = checkIfOddOrEven(userNumber + computerNumber);
    console.debug("isOddOrEven", isOddOrEven);

    const victoryMessage = userChoice === isOddOrEven ? `L'utente ha vinto!` : `Il computer ha vinto!`;
    if (userChoice === isOddOrEven) {
        userScore ++;
    } else {
        computerScore ++;
    }
    showAllData(victoryMessage, userChoice, userNumber, computerNumber, sum, isOddOrEven, userScore, computerScore);
    numberInput.value = generateRandomNumber(maxNumber, minNumber);
};







function showAllData(victoryMessage, userChoice, userNumber, computerNumber, sum, isOddOrEven, userScore, computerScore) {
    const dataToShow = `
        <strong>${victoryMessage}</strong>
        <p>
        Hai scelto: ${userChoice}
        <br/>
        Il tuo numero: ${userNumber}
        <br/>
        Il numero del computer: ${computerNumber}
        <br/>
        La somma dei due numeri: ${sum} (${isOddOrEven})
        </p>
        Punteggio: utente = ${userScore} / computer = ${computerScore}
    `;
    alert(`
            ${victoryMessage}

            Hai scelto: ${userChoice}
            Il tuo numero: ${userNumber}
            Il numero del computer: ${computerNumber}
            La somma dei due numeri: ${sum} (${isOddOrEven})
            Punteggio: utente = ${userScore} / computer = ${computerScore}
        `);
    if (showResults.classList.contains('d-none')) showResults.classList.remove('d-none');
    showResults.innerHTML = dataToShow;
};




function alertInputError(userNumber, minNumber, maxNumber, input) {
    if (isNaN(userNumber)) userNumber = 'del testo';
    input.value = startValue;
    alert(`
        C'è stato un errore con il valore inserito.
        Devi inserire un numero compreso tra ${minNumber} e ${maxNumber}.
        Tu hai inserito: ${userNumber}
    `);
};