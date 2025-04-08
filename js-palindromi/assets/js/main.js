const btnCheckIfPalindrome = document.getElementById('checkIfPalindrome');
btnCheckIfPalindrome.addEventListener('click', tellIfPalindrome);



function tellIfPalindrome () {
    const valueToCheck = document.getElementById('valueToCheck').value;
    const isValuePalindrome = isPalindrome(valueToCheck);
    const message = isValuePalindrome === true ? `"${valueToCheck}" è un palindromo!` : `"${valueToCheck}" non è un palindromo!`;
    alert(message);
};

// * MIA VERSIONE
// CREO LA PAROLA AL CONTRARIO E ALLA FINE LA COMPARO ALLA PAROLA INIZIALE
// function isPalindrome(value) {
    
//     // NB: NON SERVE IL TOSTRING PER I NUMERI, VA BENE SOLO TOLOWERCASE
//     // value = value.toString().toLowerCase();
//     value = value.toLowerCase();
//     let reversedValue = "";

//     // console.debug("value", value);
    
//     for (let i = 0; i <= value.length - 1; i ++) {
//         const currentLetter = value[i];
//         // console.debug("currentLetter", currentLetter);
        
//         if (currentLetter !== " ") {
//             reversedValue = currentLetter + reversedValue;
//             // console.debug("reversedValue", reversedValue);
//         };
//     };

//     return value.replaceAll(' ', '') === reversedValue;
// };





// * VERSIONE CORREZIONE (ALTERNATIVA, PIU OTTIMIZZATA)
// COMPARO VIA VIA SE IL PRIMO CARATTERE E UGUALE ALL'ULTIMO ECC...
// COSI ITERO LA META DELLE VOLTE, E APPENA QUALCOSA NON CORRISPONDE ESCO DAL CICLO 
// * TODO = AGGIUNGERE CONTROLLO SPAZI PER INSERIMENTO DI UNA FRASE
function isPalindrome(value) {
    value = value.toLowerCase();
    
    const numberOfIterations = Math.floor(value.length / 2);
    const lastIndex = value.length - 1;

    // for (let i = 0; i <= numberOfIterations; i ++)
    for (let i = 0; i < numberOfIterations; i ++) {
        const firstEndCharacter = value[i];
        const lastEndCharacter = value[lastIndex - i];
        if (firstEndCharacter !== lastEndCharacter) {
            return false;
        };
    };

    return true;
};