const UPDATE_SEARCH_VALUE = 'UPDATE-SEARCH-VALUE';

let initialState = {
    newValue: 'test',
}

const searchValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE: {
            let stateCopy = {...state};
            stateCopy.newValue = action.newValue;
            return stateCopy;
        }
        default:
            return state;
    };

}


export const searchValueReducerAC = (value) => ({
    type: UPDATE_SEARCH_VALUE,
    newValue: value,
});

export default searchValueReducer;