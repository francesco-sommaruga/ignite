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
const popular_games = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=9`;
const upcoming_games = `games?dates=${currentDate},${nextYearDate}&ordering=-added&page_size=9`;
const new_games = `games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=9`;

//final url
export const popularGamesUrl = () => base_url + popular_games;
export const upcomingGamesUrl = () => base_url + upcoming_games;
export const newGamesUrl = () => base_url + new_games;

//game details final url
export const gameDetailsUrl = id => base_url + 'games/' + id;

//game screenshots
export const gameScreenshotUrl = id => base_url + 'games/' + id + '/screenshots';
