// 72. Remove characters in a string except alphabets

const removeCharacters = (inputString) => {
    let input = inputString.split('');
    let result = [];
    let index = 0;

    for (let i = 0; i < input.length; i++) {
        if (65 <= inputString.charCodeAt(i) && inputString.charCodeAt(i) <= 90 || 97 <= inputString.charCodeAt(i) && inputString.charCodeAt(i) <= 122) {
            result[index] = inputString[i];
            index++;
        }
    }

    result = result.join('');
    return result;
};

console.log("Special characters removed from the string '@&$Rri123': ", removeCharacters('@&$Rri123'));