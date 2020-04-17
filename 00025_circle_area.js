// 25. Find Area of a circle

let radius;
let area;

const areaOfCircle = (radius) => {
    area = 3.14 * radius * radius;
    return area
}

areaOfCircle(radius);
console.log("Area of circle:", areaOfCircle(5));