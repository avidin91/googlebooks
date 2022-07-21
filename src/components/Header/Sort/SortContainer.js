import {connect} from "react-redux";
import Sort from "./Sort";
import {updateCategoriesValueAC} from "../../../redux/sortByCategories-reducer";
import {updateSortingByValueAC} from "../../../redux/sortingBy-reducer";



function mapStateToProps(state) {
    return {
        newValue: state.categoriesValue.newValue,
        newSortingValue: state.sortingByValue.newSortingValue,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        updateCategoriesValue: (value) => {dispatch(updateCategoriesValueAC(value))},
        updateSortingByValue: (value) => {dispatch(updateSortingByValueAC(value))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);