const { sum_values, multiply_values } = require("../main");

describe("Arithimetic", () => {
    it("should return sum for tow number", () => {
        const res = sum_values(1, 2);

        expect(res).toBe(3);
    });

    it("should return 8", () => {
        const res = multiply_values(1, 2);

        expect(res).toBe(2);
    });
});