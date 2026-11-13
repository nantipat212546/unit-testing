
const calculateDiscount = require("./calculateDiscount");

describe("calculateDiscount", () => {

    test("member should receive 10% discount", () => {

        // Arrange
        const price = 1000;
        const member = true;

        // Act
        const result = calculateDiscount(price, member);

        // Assert
        expect(result).toBe(900);

    });


    test("non-member should pay full price", () => {

        // Arrange
        const price = 1000;
        const member = false;

        // Act
        const result = calculateDiscount(price, member);

        // Assert
        expect(result).toBe(1000);

    });


});
