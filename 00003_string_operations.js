const readline = require("readline-sync");
const string1 = readline.question("Enter the first string : ");
const string2 = readline.question("Enter the second string : ");

let concatinate = string1.concat(string2);
console.log("Concatinated : ", concatinate);

let reverseString1 = string1.split('').reverse().join('');
console.log("Reverse of the first string :", reverseString1);
let reverseString2 = string2.split('').reverse().join('');
console.log("Reverse of the second string :", reverseString2);
let reverseConcat = reverseString1.concat(reverseString2);
console.log("Reverse concatinated :", reverseConcat);

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
console.log("String mixed :", stringMixResult);

splitedHalfOfString1 = () => {
    if (string1.length % 2 == 0) {
        return string1.slice(0, string1.length / 2)
    } else return "cannot be devided."
}
splitedHalfOfString2 = () => {
    if (string2.length % 2 == 0) {
        return string2.slice(0, string2.length / 2)
    } else return "cannot be devided."
}
console.log("The splited half of the first string :", splitedHalfOfString1());
console.log("The splited half of the second string :", splitedHalfOfString2());

let removedSpaceOfString1 = string1.replace(/ /g, "")
console.log("The space in the first string removed : ", removedSpaceOfString1)
let removedSpaceOfString2 = string2.replace(/ /g, "")
console.log("The space in the first string removed : ", removedSpaceOfString2)

string1WithExtraCharacter = () => {
    let string1ExtraCharacter = []
    for (i = 0; i < string1.length; i++) {
        string1ExtraCharacter[i] = string1[i].concat("$")

    }
    return string1ExtraCharacter
}
string2WithExtraCharacter = () => {
    let string2ExtraCharacter = []
    for (i = 0; i < string2.length; i++) {
        string2ExtraCharacter[i] = string2[i].concat("$")

    }
    return string2ExtraCharacter
}
let string1WithExtraCharacterOut = string1WithExtraCharacter();
let string2WithExtraCharacterOut = string2WithExtraCharacter();
let string1WithExtraCharacterWithoutComma = String(string1WithExtraCharacterOut).replace(/,/g, "");
let string2WithExtraCharacterWithoutComma = String(string2WithExtraCharacterOut).replace(/,/g, "");
console.log("First string with extra character :", string1WithExtraCharacterWithoutComma);
console.log("Second string with extra character :", string2WithExtraCharacterWithoutComma);