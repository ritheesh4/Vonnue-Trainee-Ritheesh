// 68. Count the number of vowels

const countVowels = (input) => {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let inputArray = input.split('');
    
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < 10; j++) {
            if (vowels[j] === inputArray[i]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
};

console.log("Count of vowels in the string 'ritheesh'=", countVowels("ritheesh"));
console.log("Count of vowels in the string 'MALayalam'=", countVowels("MALayalam"));