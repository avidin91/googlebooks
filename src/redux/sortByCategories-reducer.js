const UPDATE_SORT_CATEGORIES_VALUE = 'UPDATE-SORT-CATEGORIES-VALUE';

let initialState = {
    newValue: 'All',
}

const sortByCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SORT_CATEGORIES_VALUE: {
            let stateCopy = {...state};
            stateCopy.newValue = action.newValue;
            return stateCopy;
        }
        default:
            return state;
    };

}


export const updateCategoriesValueAC = (value) => ({
    type: UPDATE_SORT_CATEGORIES_VALUE,
    newValue: value,
});

export default sortByCategoriesReducer;