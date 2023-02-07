module.exports = {
    stringCalculator: async (numberString) => {
        numberString = numberString.replace(/\n/, ",");
        if(numberString.length === 0) {
            return 0;
        }
        if(numberString.length === 1) {
            return Number(numberString);
        }
        let findDelimiter = numberString.split("//");
        let delimiter = findDelimiter[1] ? findDelimiter[1][0] : null;
        if(delimiter !== null) {
            numberString = numberString.replaceAll(delimiter, ",");
        }
        const numbers = numberString.split(",");
        if(numbers[numbers.length - 1] === '') {
            return "Not Valid"
        }
        console.log(numberString);
        let sum = 0;
        for(let number of numbers) {
            if(number.match(/\d/)) {
                sum += Number(number);
            }
        }
        return sum;
    }
}