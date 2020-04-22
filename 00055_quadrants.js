// 55. Quadrants in which coordinates lie

const quadrants = (x, y) => {
    if (x > 0 && y > 0) {
        return "First";
    } else if (x < 0 && y > 0) {
        return "Second";
    } else if (x < 0 && y < 0) {
        return "Third";
    } else if (x > 0 && y < 0) {
        return "Fourth";
    }
};

console.log("The quadrant in which coordinates line (-1,3): ", quadrants(-1, 3));
console.log("The quadrant in which coordinates line (5,-3): ", quadrants(5, -3));