// 3. Enter 2 strings and do the following operations
// concatenate / reverse / reverse concat / mix the letters / split in half / remove all white spaces / add a character after every specific letter /

const concatinate = (string1, string2) => {
    let concatinatedResult = string1.concat(string2);
    return concatinatedResult;
};

const reverseString = (string1, string2) => {
    let reverseString1 = string1.split('').reverse().join('');
    let reverseString2 = string2.split('').reverse().join('');
    return [reverseString1, reverseString2];
};

const reverseConcat = (string1, string2) => {
    let reverseOfStrings = reverseString(string1, string2);
    let result1 = reverseOfStrings[0];
    let result2 = reverseOfStrings[1];
    let reverseConcat = result1.concat(result2);
    return reverseConcat;
};

const stringMixUp = (string1, string2) => {
    let stringMix = [];
    if (string1.length > string2.length) {
        for (let i = 0; i < string1.length; i++) {
            if (i + 1 > string2.length) {
                stringMix = stringMix + string1[i];
            } else {
                let currentString = string1[i].concat(string2[i]);
                stringMix[i] = currentString;
            }

        }
    } else {
        for (let i = 0; i < string2.length; i++) {
            if (i + 1 > string1.length) {
                stringMix = stringMix + string2[i];
            } else {
                let currentString = string1[i] + string2[i];
                stringMix[i] = currentString;
            }

        }

    }
    return stringMix;
};

const splitedHalfOfString = (string1, string2) => {
    let string1Result;
    let string2Result;
    if (string1.length % 2 === 0) {
        string1Result = string1.slice(0, string1.length / 2);
    } else {
        string1Result = "cannot be divided.";
    }
    if (string2.length % 2 === 0) {
        string2Result = string2.slice(0, string2.length / 2);
    } else {
        string2Result = "cannot be divided.";

    }
    return [string1Result, string2Result];
};


const spaceOfStringRemove = (string1, string2) => {
    let spaceRemovedString1 = string1.replace(/ /g, "");
    let spaceRemovedString2 = string2.replace(/ /g, "");
    return [spaceRemovedString1, spaceRemovedString2];
};

const stringWithExtraCharacter = (string1, string2) => {
    let string1ExtraCharacter = [];
    for (let i = 0; i < string1.length; i++) {
        string1ExtraCharacter[i] = string1[i].concat("$");
    }
    let string1Result = String(string1ExtraCharacter).replace(/,/g, "");
    let string2ExtraCharacter = [];
    for (let i = 0; i < string2.length; i++) {
        string2ExtraCharacter[i] = string2[i].concat("$");
    }
    let string2Result = String(string2ExtraCharacter).replace(/,/g, "");
    return [string1Result, string2Result];
};

console.log("concatinate: ", concatinate("timna", "arun"));
console.log("reverseString: ", reverseString("timna", "arun"));
console.log("reverse concant: ", reverseConcat("arun", "arun"));
console.log("stringMixup: ", stringMixUp("timna", "arun"));
console.log("splited half of both first and second string: ", splitedHalfOfString("timna", "arun"));
console.log("space removed both strings: ", spaceOfStringRemove("ti mna", "a run"));
console.log("Extra character added in the first string: ", stringWithExtraCharacter("timna", "arun"));