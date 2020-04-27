// 61. Roots of a quadratic equation

const quadraticRoots = (a, b, c) => {
    let firstPart = (b * b - 4 * a * c);
    if (firstPart < 0) {
        firstPart = firstPart * -1;
        let firstPartRoot = Math.sqrt(firstPart);
        let imaginary = firstPartRoot / (2 * a);
        let root1 = -b / (2 * a);
        let stringfirstPart = root1.toString();
        root1 = stringfirstPart.concat('+', imaginary, 'i');
        let root2 = stringfirstPart.concat('-', imaginary, 'i');
        return [root1, root2];
    } else {
        let firstPartRoot = Math.sqrt(firstPart);
        let root1 = (-b + firstPartRoot) / (2 * a);
        let root2 = (-b - firstPartRoot) / (2 * a);
        return [root1, root2];
    }
};

console.log("Roots of the quadratic equation: x^2 − 4x + 6.25 = 0 = ", quadraticRoots(1, -4, 6.25));
console.log("Roots of the quadratic equation: 5x^2 + 6x + 1 = 0 = ", quadraticRoots(5, 6, 1));