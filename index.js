module.exports = {
    stringCalculator: async (numberString) => {
        if(numberString.length === 0) {
            return 0;
        }
        if(numberString.length === 1) {
            return Number(numberString);
        }
        numberString = numberString.replace(/\n/, ",");
        const numbers = numberString.split(",");
        let sum = 0;
        for(let number of numbers) {
            sum += Number(number);
        }
        return sum;
    }
}