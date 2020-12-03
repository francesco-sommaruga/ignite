import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
// import { navReducer } from './navReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    // nav: navReducer,
});

export default rootReducer;
