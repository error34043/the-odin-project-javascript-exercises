const sumAll = (num1,num2) => {
    if (num1 < 0 | num2 < 0 | typeof num1 !== 'number' | typeof num2 !== 'number') {
        return 'ERROR';
    } else {
        let sum = 0;
        if (num2 > num1) {
            for (num1; num1 <= num2; num1++) {
                sum += num1;
            }
            return sum;
        } else if (num1 > num2) {
            for (num2; num2 <= num1; num2++) {
                sum += num2;
            }
            return sum;
        }
    }
}

module.exports = sumAll
