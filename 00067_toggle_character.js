// 67. Toggle each character in a string

const toggleCharacter = (list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= 'a' && list[i] <= 'z') {
            list[i] = list[i].toUpperCase();
        }
        else if (list[i] >= 'A' && list[i] <= 'Z') {
            list[i] = list[i].toLowerCase();
        }
    }
    return list
}

console.log("Tolgge character of list ['a', 'B', 'e', 'R', 'w'] =", toggleCharacter(['a', 'B', 'e', 'R', 'w']))