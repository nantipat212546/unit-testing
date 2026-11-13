
const validateUsername = require("./validateUsername");

describe("validateUsername", () => {

    // Positive Test Cases

    test("P1: minimum length 5", () => {
        expect(validateUsername("john1")).toBe(true);
    });

    test("P2: contains underscore", () => {
        expect(validateUsername("john_doe")).toBe(true);
    });

    test("P3: letters numbers underscore", () => {
        expect(validateUsername("User_123")).toBe(true);
    });

    test("P4: letters and numbers", () => {
        expect(validateUsername("abcde12345")).toBe(true);
    });

    test("P5: maximum length 20", () => {
        expect(
            validateUsername("abcdefghijklmnopqrst")
        ).toBe(true);
    });

    // Negative Test Cases

    test("N1: shorter than 5", () => {
        expect(validateUsername("john")).toBe(false);
    });

    test("N2: longer than 20", () => {
        expect(
            validateUsername("abcdefghijklmnopqrstu")
        ).toBe(false);
    });

    test("N3: starts with number", () => {
        expect(validateUsername("1john")).toBe(false);
    });

    test("N4: contains spaces", () => {
        expect(validateUsername("john doe")).toBe(false);
    });

    test("N5: invalid character", () => {
        expect(validateUsername("john@123")).toBe(false);
    });

});

describe("Boundary Value Testing", () => {

    test("4 characters should fail", () => {
        expect(validateUsername("abcd")).toBe(false);
    });

    test("5 characters should pass", () => {
        expect(validateUsername("abcde")).toBe(true);
    });

    test("6 characters should pass", () => {
        expect(validateUsername("abcdef")).toBe(true);
    });

    test("20 characters should pass", () => {
        expect(validateUsername("a".repeat(20))).toBe(true);
    });

    test("21 characters should fail", () => {
        expect(validateUsername("a".repeat(21))).toBe(false);
    });

});

describe("Invalid Data Types", () => {

    test("null should fail", () => {
        expect(validateUsername(null)).toBe(false);
    });

    test("number should fail", () => {
        expect(validateUsername(12345)).toBe(false);
    });

    test("empty string should fail", () => {
        expect(validateUsername("")).toBe(false);
    });

});
