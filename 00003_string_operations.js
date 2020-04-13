const readline = require("readline-sync");
const string1 = readline.question("Enter the first string : ");
const string2 = readline.question("Enter the second string : ");

let concatinate = string1.concat(string2);
console.log("Concatinated : ", concatinate);

let reverseString1 = string1.split('').reverse().join('');
console.log("Reverse of the first string : ", reverseString1);
let reverseString2 = string2.split('').reverse().join('');
console.log("Reverse of the second string : ", reverseString2);
let reverseConcat = reverseString1.concat(reverseString2);
console.log("Reverse concatinated : ", reverseConcat);

let stringMix = [];
if (string1.length > string2.length) {
    for (i = 0; i < string1.length; i++) {
        if (i + 1 > string2.length) {
            stringMix = stringMix + string1[i];
        } else {
            let currentStringValuesofString1AndString2 = string1[i].concat(string2[i]);
            stringMix[i] = currentStringValuesofString1AndString2;
        }

    }
} else {
    for (i = 0; i < string2.length; i++) {
        if (i + 1 > string1.length) {
            stringMix = stringMix + string2[i];
        } else {
            let currentStringValuesofString1AndString2 = string1[i] + string2[i];
            stringMix[i] = currentStringValuesofString1AndString2;
        }

    }

}
let stringMixResult = stringMix.replace(/,/g, "");
console.log("String mixed :",stringMixResult);

