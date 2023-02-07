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

        addition = await stringCalculator("1,2,3");
        expect(addition).to.equals(6);

        addition = await stringCalculator("1,2\n3");
        expect(addition).to.equals(6);

        addition = await stringCalculator("1\n2,5");
        expect(addition).to.equals(8);

        addition = await stringCalculator("1,2,5,\n");
        expect(addition).to.equals("Not Valid");

        addition = await stringCalculator("//;\n1;2");
        expect(addition).to.equals(3);

        addition = await stringCalculator("//;1;2;3;4\n5");
        expect(addition).to.equals(15);
    })
})