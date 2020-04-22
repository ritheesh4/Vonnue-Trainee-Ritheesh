// 54. Maximum number of handshakes

const handshake =(numberPeople) => {
    let maximumHandshake = (numberPeople*(numberPeople-1))/2;
    return maximumHandshake;
};

console.log("The maximum number of handshakes possible by 10 people is:",handshake(10));
console.log("The maximum number of handshakes possible by 2 people is:",handshake(2));