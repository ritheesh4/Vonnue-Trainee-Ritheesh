// 3. Enter 2 strings and do the following operations
// concatenate / reverse / reverse concat / mix the letters / split in half / remove all white spaces / add a character after every specific letter /

const readline = require("readline-sync");
const string1 = readline.question("Enter the first string : ");
const string2 = readline.question("Enter the second string : ");

const concatinate = (string1,string2) => {
    let concatinatedResult = string1.concat(string2);
    return concatinatedResult
}

const reverseString = () => {
    let reverseString1 = string1.split('').reverse().join('');
    console.log("Reverse of the first string :", reverseString1);
    let reverseString2 = string2.split('').reverse().join('');
    console.log("Reverse of the second string :", reverseString2);
    let reverseConcat = reverseString1.concat(reverseString2);
    console.log("Reverse concatinated :", reverseConcat);
}

const stringMixUp = (string1,string2) => {
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
    return stringMixResult
}

const splitedHalfOfString1 = (string1) => {
    if (string1.length % 2 == 0) {
        return string1.slice(0, string1.length / 2)
    } else return "cannot be devided."
}

const splitedHalfOfString2 = (string2) => {
    if (string2.length % 2 == 0) {
        return string2.slice(0, string2.length / 2)
    } else return "cannot be devided."
}

const spaceOfString1 = (string1) => {
    let spaceRemovedString1 = string1.replace(/ /g, "");
    return spaceRemovedString1
}

const spaceOfString2 = (string2) => {
    let spaceRemovedString2 = string2.replace(/ /g, "");
    return spaceRemovedString2
}

const string1WithExtraCharacter = (string1) => {
    let string1ExtraCharacter = []
    for (i = 0; i < string1.length; i++) {
        string1ExtraCharacter[i] = string1[i].concat("$")

    }
    let string1WithExtraCharacterWithoutComma = String(string1ExtraCharacter).replace(/,/g, "");
    return string1WithExtraCharacterWithoutComma
}

const string2WithExtraCharacter = (string2) => {
    let string2ExtraCharacter = []
    for (i = 0; i < string2.length; i++) {
        string2ExtraCharacter[i] = string2[i].concat("$")

    }
    let string2WithExtraCharacterWithoutComma = String(string2ExtraCharacter).replace(/,/g, "");
    return string2WithExtraCharacterWithoutComma
}

concatinate(string1, string2);
reverseString(string1, string2);
stringMixUp(string1, string2);
splitedHalfOfString1(string1);
splitedHalfOfString2(string2)
spaceOfString1(string1);
spaceOfString2(string2);
string1WithExtraCharacter(string1);
string2WithExtraCharacter(string2);