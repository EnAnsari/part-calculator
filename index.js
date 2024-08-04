const moment = require('jalali-moment');

function getDate() {
    return moment().locale('fa').format('YYYY/M/D');
}

class Calculator {

    sum(number1, number2) {
        return `sum of ${number1} & ${number2} equal to ${number1 + number2}! In ${getDate()}`;
    }

    sub(number1, number2) {
        return `sub of ${number1} & ${number2} equal to ${number1 - number2}! In ${getDate()}`;
    }

    mul(number1, number2) {
        return `mul of ${number1} & ${number2} equal to ${number1 * number2}! In ${getDate()}`;
    }

    div(number1, number2) {
        return `div of ${number1} & ${number2} equal to ${number1 / number2}! In ${getDate()}`;
    }
    mod(number1, number2) {
        return `mod of ${number1} & ${number2} equal to ${number1 % number2}! In ${getDate()}`;
    }

    pow(base, n) {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= base;
        }
        return `pow of ${base} & ${n} equal to ${result}! In ${getDate()}`;
    }
}

module.exports = Calculator;