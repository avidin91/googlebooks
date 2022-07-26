import {connect} from "react-redux";
import Search from "./Search";
import {searchValueReducerAC} from "../../../redux/search-reducer";


function mapStateToProps(state) {
    return {
        items: state.itemsPage.items,
        searchValue: state.searchValue.newValue,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        setSearchValue: (value) => {
            dispatch(searchValueReducerAC(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);