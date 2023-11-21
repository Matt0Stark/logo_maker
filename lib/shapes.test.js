const {Circle, Triangle, Square} = require("./shapes");

describe("shape color tests", () => {
    test ("circle should have the correct color", () => {
        const circle = new Circle('blue');
        expect(circle.render()).toContain("fill=blue");
    }),

    test ("triangle should have the correct color", () => {
        const triangle = new Triangle('red');
        expect(triangle.render()).toContain("fill=red");
    }),

    test ("square should have the correct color", () => {
        const square = new Square('black');
        expect(square.render()).toContain("fill=black");
    })
})

// test ("triangle should have the correct color", () => {
//     const triangle = new Triangle('red');
//     expect(triangle.reader()).toContain("fill=red");
// }),

// test ("square should have the correct color", () => {
//     const square = new Square('black');
//     expect(square.reader()).toContain("fill=black");
// }),
