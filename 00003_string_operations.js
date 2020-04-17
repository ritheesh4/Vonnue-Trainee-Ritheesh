// 3. Enter 2 strings and do the following operations
// concatenate / reverse / reverse concat / mix the letters / split in half / remove all white spaces / add a character after every specific letter /

let string1 = "";
let string2 = "";

const concatinate = (string1, string2) => {
    let concatinatedResult = string1.concat(string2);
    return concatinatedResult
}

const reverseString1 = (string1) => {
    let reverseString1 = string1.split('').reverse().join('');
    return reverseString1
}

const reverseString2 = (string2) => {
    let reverseString2 = string2.split('').reverse().join('');
    return reverseString2
}

const reverseConcat = (string1, string2) => {
    let result1 = reverseString1(string1);   
    let result2 = reverseString2(string2);
    console.log(result2);
    console.log(result2);
    let reverseConcat = result1.concat(result2);   
    return reverseConcat
}

const stringMixUp = (string1, string2) => {
    let stringMix = [];
    if (string1.length > string2.length) {
        for (let i = 0; i < string1.length; i++) {
            if (i + 1 > string2.length) {
                stringMix = stringMix + string1[i];
            } else {
                let currentStringValuesofString1AndString2 = string1[i].concat(string2[i]);
                stringMix[i] = currentStringValuesofString1AndString2;
            }

        }
    } else {
        for (let i = 0; i < string2.length; i++) {
            if (i + 1 > string1.length) {
                stringMix = stringMix + string2[i];
            } else {
                let currentStringValuesofString1AndString2 = string1[i] + string2[i];
                stringMix[i] = currentStringValuesofString1AndString2;
            }

        }

    }
    return stringMix
}

const splitedHalfOfString1 = (string1) => {
    if (string1.length % 2 == 0) {
        return string1.slice(0, string1.length / 2)
    } else return "cannot be divided."
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
    for (let i = 0; i < string1.length; i++) {
        string1ExtraCharacter[i] = string1[i].concat("$")
    }
    let string1WithExtraCharacterWithoutComma = String(string1ExtraCharacter).replace(/,/g, "");
    return string1WithExtraCharacterWithoutComma
}

const string2WithExtraCharacter = (string2) => {
    let string2ExtraCharacter = []
    for (let i = 0; i < string2.length; i++) {
        string2ExtraCharacter[i] = string2[i].concat("$")
    }
    let string2WithExtraCharacterWithoutComma = String(string2ExtraCharacter).replace(/,/g, "");
    return string2WithExtraCharacterWithoutComma
}

concatinate(string1, string2);
reverseString1(string1);
reverseString2(string2);
reverseConcat(string1, string2);
stringMixUp(string1, string2);
splitedHalfOfString1(string1);
splitedHalfOfString2(string2)
spaceOfString1(string1);
spaceOfString2(string2);
string1WithExtraCharacter(string1);
string2WithExtraCharacter(string2);

console.log("concatinate: ", concatinate("timna", "arun"));
console.log("reverseString: ", reverseString1("timna"));
console.log("reverseString: ", reverseString2("arun"));
console.log("reverse concant: ", reverseConcat("arun", "arun"));
console.log("stringMixup: ", stringMixUp("timna", "arun"));
console.log("splited half of first string: ", splitedHalfOfString1("timna"));
console.log("splited half of second string: ", splitedHalfOfString2("arun"));
console.log("space removed first string: ", spaceOfString1("ti mna"));
console.log("space removed second string: ", spaceOfString2("a run"));
console.log("Extra character added in the first string: ", string1WithExtraCharacter("timna"));
console.log("Extra character added in the second string: ", string2WithExtraCharacter("arun"));