const { sum_values } = require("../main");

describe("SumValues", () => {
    it("should return sum for tow number", () => {
        const res = sum_values(1, 2);

        expect(res).toBe(3);
    })
});