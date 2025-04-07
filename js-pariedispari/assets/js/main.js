// * TODO: UTILIZZARE QUESTI VALORI PER MODIFICARE GLI ATTRIBUTI DELL'INPUT SENZA DOVER MODIFICARE HTML
const maxNumber = 5;
const minNumber = 1;

const btnPlayOddOrEven = document.getElementById('playOddOrEven');
btnPlayOddOrEven.addEventListener('click', playOddOrEven);


function playOddOrEven() {
    console.clear();

    const userChoice = document.querySelector('input:checked').id;
    console.debug("userChoice", userChoice);
    let userNumber = parseInt(document.getElementById('userNumber').value);
    console.debug("userNumber PRIMA DEL CONTROLLO", userNumber);
    console.debug("isNaN(userNumber)", isNaN(userNumber));
    
    // * TODO: PER NUMERI INFERIORI A 1 || NUMERI SUPERIORI A 5, AVVERTIRE L'UTENTE DELL'ERRORE E RICOMINCIARE
    // if (userNumber < minNumber || isNaN(userNumber)) userNumber = minNumber;
    // if (userNumber > maxNumber) userNumber = maxNumber;
    // console.debug("userNumber DOPO IL CONTROLLO", userNumber);
    // if (userNumber < minNumber || isNaN(userNumber) || userNumber > maxNumber) throw new Error ('Devi inserire un numero da 1 a 5');
    if (userNumber < minNumber || isNaN(userNumber) || userNumber > maxNumber) return alertInputError(userNumber, minNumber, maxNumber, document.getElementById('userNumber'));
    
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
    // IL CONTROLLO PER VEDERE SE SONO NUMERI FORSE MEGLIO FARLO SOPRA
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
    input.value = 1;
    alert(`
        C'è stato un errore con il valore inserito.
        Devi inserire un numero compreso tra ${minNumber} e ${maxNumber}.
        Tu hai inserito: ${userNumber}
    `);
}