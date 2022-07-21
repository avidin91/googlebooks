import {combineReducers, legacy_createStore as createStore} from "redux";
import itemsReducer from "./items-reducer";
import sortByCategoriesReducer from "./sortByCategories-reducer";
import sortingByReducer from "./sortingBy-reducer";


let reducers = combineReducers({
   itemsPage: itemsReducer,
   categoriesValue: sortByCategoriesReducer,
   sortingByValue: sortingByReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;