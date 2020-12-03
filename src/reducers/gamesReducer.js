const initialState = {
    popular: [],
    new: [],
    upcoming: [],
    searched: [],
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                popular: action.payload.popular,
                new: action.payload.new,
                upcoming: action.payload.upcoming,
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;
