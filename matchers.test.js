
describe("Jest Matchers", () => {

    test("toBe: compare numbers", () => {
        expect(2 + 3).toBe(5);
    });

    test("toEqual: compare objects", () => {
        const user = {
            name: "John",
            age: 20
        };

        expect(user).toEqual({
            name: "John",
            age: 20
        });
    });

    test("toBeTruthy: non-empty string", () => {
        expect("Hello").toBeTruthy();
    });

    test("toBeFalsy: empty string", () => {
        expect("").toBeFalsy();
    });

    test("toContain: array contains item", () => {
        const languages = [
            "JavaScript",
            "Python",
            "Java"
        ];

        expect(languages).toContain("Python");
    });

    test("toThrow: error handling", () => {
        function divide(a, b) {
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }

            return a / b;
        }

        expect(() => divide(10, 0))
            .toThrow("Cannot divide by zero");
    });

});
