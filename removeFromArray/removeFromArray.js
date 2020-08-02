const removeFromArray = (inputArr,...inputElements) => {
    let removeArr = [...inputElements];
    for (let i = 0; i < removeArr.length; i++) {
        for (let j = 0; j < inputArr.length; j++) {
            if (removeArr[i] === inputArr[j]) {
                inputArr.splice(j, 1);
            }
        }
    }
    return inputArr;
}

module.exports = removeFromArray