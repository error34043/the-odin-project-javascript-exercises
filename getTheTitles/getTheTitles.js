const getTheTitles = bookList => {
    let titles = [];
    for (let i = 0; i < bookList.length; i++) {
        titles.push(bookList[i].title);
    };
    return titles;
};

module.exports = getTheTitles;
