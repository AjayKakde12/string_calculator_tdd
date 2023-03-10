module.exports = {
    stringCalculator: async (numberString) => {
        try {
            let negativeNumbers = [];
            numberString = numberString.replaceAll(/\n/g, ",");
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
            let sum = 0;
            for(let number of numbers) {
                if(Number(number) < 0) {
                    negativeNumbers.push(number);
                }
                if(number.match(/\d/)) {
                    sum += Number(number);
                }
            }
            if(negativeNumbers.length) {
                throw `negatives not allowed: ${negativeNumbers.join(',')}`;
            } 
            return sum;
        } catch(msg) {
            return new Error(msg)
        }
    }
}