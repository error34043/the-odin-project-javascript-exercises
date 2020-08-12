const palindromes = strInp => {
    let str = strInp.toLowerCase();
    let strArr = str.split("");
    let lettersArr = [];
    const includeRegex = /[a-z]/i;
    let sum = 0;
    for (let index = 0; index < strArr.length; index++) {
        if (includeRegex.test(strArr[index]) === true) {
            lettersArr.push(strArr[index]);
        };
    };

    let firstHalf = [];
    let secondHalf = [];
    let midpt = lettersArr.length / 2;
    if (lettersArr.length % 2 === 0) {
        firstHalf = lettersArr.slice(0,midpt);
        secondHalf = lettersArr.slice(midpt).reverse();
    } else {
        firstHalf = lettersArr.slice(0,midpt);
        secondHalf = lettersArr.slice(midpt + 1).reverse();
    };
    for (let i = 0; i < firstHalf.length; i++) {
        if (firstHalf[i] === secondHalf[i]) {
            sum += 0;
        } else {
            sum += 1;
        };
        console.log(`${firstHalf[i]}, ${secondHalf[i]}`);
    };
    if (sum === 0) {
        return true;
    } else {
        return false;
    };
};

module.exports = palindromes

console.log(palindromes('Racecar!'));