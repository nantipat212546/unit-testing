
const isAdult = require("./isAdult");

describe("isAdult", () => {

    test("age 20 should be adult", () => {
        expect(isAdult(20)).toBe(true);
    });

    test("age 17 should not be adult", () => {
        expect(isAdult(17)).toBe(false);
    });

    test("age 18 should be adult", () => {
        expect(isAdult(18)).toBe(true);
    });

});
