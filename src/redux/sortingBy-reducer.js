const UPDATE_SORTING_BY_VALUE = 'UPDATE-SORTING-BY-VALUE';

let initialState = {
    newSortingValue: 'Title',
}

const sortingByReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SORTING_BY_VALUE: {
            let stateCopy = {...state};
            stateCopy.newSortingValue = action.newSortingValue;
            return stateCopy;
        }
        default:
            return state;
    };

}


export const updateSortingByValueAC = (value) => ({
    type: UPDATE_SORTING_BY_VALUE,
    newSortingValue: value,
});

export default sortingByReducer;