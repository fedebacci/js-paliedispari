const btnCheckIfPalindrome = document.getElementById('checkIfPalindrome');
btnCheckIfPalindrome.addEventListener('click', tellIfPalindrome);



function tellIfPalindrome () {
    const valueToCheck = document.getElementById('valueToCheck').value;
    const isValuePalindrome = isPalindrome(valueToCheck);
    const message = isValuePalindrome === true ? `"${valueToCheck}" è un palindromo!` : `"${valueToCheck}" non è un palindromo!`;
    alert(message);
};
function isPalindrome(value) {
    
    value = value.toString().toLowerCase();
    let reversedValue = "";

    // console.debug("value", value);
    
    for (let i = 0; i <= value.length - 1; i ++) {
        const currentLetter = value[i];
        // console.debug("currentLetter", currentLetter);
        
        if (currentLetter !== " ") {
            reversedValue = currentLetter + reversedValue;
            // console.debug("reversedValue", reversedValue);
        };
    };

    return value.replaceAll(' ', '') === reversedValue ? true : false;
};