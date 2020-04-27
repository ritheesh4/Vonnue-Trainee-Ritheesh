// 59. Number of times digit 3 occurs in each and every number from 0 to n.

const threeOccurance = (n) => {
    let presenceCount = 0;
    for (let i = 0; i < n; i++) {
        
        let num = i;        
        if (num.toString().indexOf('3') > -1) {
            presenceCount++;
        }
    }
    return presenceCount;
};

console.log(threeOccurance(100));