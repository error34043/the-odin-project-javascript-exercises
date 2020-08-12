const fibonacci = inp => {
    const num = Number(inp);
    if (num < 0) {
        return 'OOPS';
    };
    const fibArr = [1, 1];
    for (let i = 0; i < num - 2; i++) {
        fibArr.push(fibArr[i] + fibArr[i+1]);
    };
    return fibArr[fibArr.length - 1];
};

module.exports = fibonacci
