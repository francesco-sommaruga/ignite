// base URL
const base_url = 'https://api.rawg.io/api/';

//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? '0' + month : month;
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    return day < 10 ? '0' + day : day;
};

const getCurrentYear = () => new Date().getFullYear();

//current year-month-day
const currentYear = getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;

//finale url
export const popularGamesUrl = () => base_url + popular_games;