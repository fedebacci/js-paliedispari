// * TODO: UTILIZZARE QUESTI VALORI PER MODIFICARE GLI ATTRIBUTI DELL'INPUT SENZA DOVER MODIFICARE HTML
const startValue = 1;
const maxNumber = 5;
const minNumber = 1;
const numberInput = document.getElementById('userNumber');
numberInput.value = startValue;
numberInput.max = maxNumber;
numberInput.min = minNumber;

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
    
    const sum = sumNumbers(userNumber, computerNumber);
    console.debug("sum", sum);
    
    const isOddOrEven = checkIfOddOrEven(sum);
    console.debug("isOddOrEven", isOddOrEven);

    checkVictory(userChoice, isOddOrEven);
};



function generateRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function sumNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function checkIfOddOrEven(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}

function checkVictory(userChoice, isOddOrEven) {
    const message = userChoice === isOddOrEven ? `L'utente ha vinto!` : `Il computer ha vinto!`;
    alert(message);
}

function alertInputError(userNumber, minNumber, maxNumber, input) {
    if (isNaN(userNumber)) userNumber = 'del testo';
    input.value = startValue;
    alert(`
        C'è stato un errore con il valore inserito.
        Devi inserire un numero compreso tra ${minNumber} e ${maxNumber}.
        Tu hai inserito: ${userNumber}
    `);
}