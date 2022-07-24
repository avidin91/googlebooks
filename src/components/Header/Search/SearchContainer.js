import {connect} from "react-redux";
import Search from "./Search";
import {searchValueReducerAC} from "../../../redux/search-reducer";


function mapStateToProps(state) {
    return {
        searchValue: state.searchValue.newValue ,
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