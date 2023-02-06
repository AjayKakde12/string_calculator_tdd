const { expect } = require("chai");
const { stringCalculator } = require(".")

describe("To calculate addition of numbers in given string", function() {
    it("Calculates addition of numbers in a string", async function() {
        let addition = await stringCalculator("");
        expect(addition).to.equals(0);

        addition = await stringCalculator("1");
        expect(addition).to.equals(1);

        addition = await stringCalculator("1,2");
        expect(addition).to.equals(3);
    })
})