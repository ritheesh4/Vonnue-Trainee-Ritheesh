// 69. Remove vowels from a string

const removeVowels = (input) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let inputArray = input.split('');

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < 10; j++) {
            if (vowels[j] === inputArray[i]) {
                inputArray[i] = '';
            }
        }
    }
    inputArray = inputArray.join('');
    return inputArray;
};

console.log("Count of vowels in the string 'ritheesh'=", removeVowels("ritheesh"));
console.log("Count of vowels in the string 'MALayalam'=", removeVowels("MALayalam"));