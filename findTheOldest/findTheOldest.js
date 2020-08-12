const findTheOldest = peopleList => {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    let oldest;
    let ages = [];
    for (let i = 0; i < peopleList.length; i++) {
        if (peopleList[i].yearOfDeath) {
            ages.push(peopleList[i].yearOfDeath - peopleList[i].yearOfBirth);
        } else {
            ages.push(currentYear - peopleList[i].yearOfBirth);
        };
    };

    const maxAgeIndex = ages.indexOf(Math.max(...ages));

    return peopleList[maxAgeIndex];
};

module.exports = findTheOldest

