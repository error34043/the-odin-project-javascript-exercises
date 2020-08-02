const leapYears = year => {
    return (year % 4 !== 0) ? false
    : (year % 100 === 0 && year % 400 === 0) ? true
    : (year % 100 !== 0 && year % 4 === 0) ? true
    : false;
}

module.exports = leapYears
