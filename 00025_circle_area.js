// 25. Find Area of a circle

let radius;
let area;

const areaOfCircle = (radius) => {
    area = 3.14 * radius * radius;
    return area
}

console.log("Area of circle with radius 5 cm is :", areaOfCircle(5),"cm^2");