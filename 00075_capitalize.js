// 75. Capitalize the first and last letter of each word of a string

const capitalize = (inpuString) => {
    let arrayOfString = inpuString.split(" ");

    for (let i = 0; i < arrayOfString.length; i++) {
        let testString = arrayOfString[i].split('');
        testString[0] = testString[0].toUpperCase();
        testString[testString.length - 1] = testString[testString.length - 1].toUpperCase();
        let result = testString.join('');
        arrayOfString[i] = result;

    }
    let capitalized = arrayOfString.join(' ');
    return capitalized;
};

console.log("Capilalized the first and last letter of each word of string 'Today is tuesday':", capitalize("Today is tuesday"));