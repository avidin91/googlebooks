import {combineReducers, legacy_createStore as createStore} from "redux";
import itemsReducer from "./items-reducer";
import sortByCategoriesReducer from "./sortByCategories-reducer";
import sortingByReducer from "./sortingBy-reducer";
import searchValueReducer from "./search-reducer";


let reducers = combineReducers({
   itemsPage: itemsReducer,
   categoriesValue: sortByCategoriesReducer,
   sortingByValue: sortingByReducer,
   searchValue: searchValueReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;