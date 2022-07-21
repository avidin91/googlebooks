import {setItemsAC} from "../../redux/items-reducer";
import {connect} from "react-redux";
import Items from "./Items";



function mapStateToProps(state) {
    return {
        items: state.itemsPage.items,
        catValue: state.categoriesValue.newValue,
        sortingByValue: state.sortingByValue.newSortingValue ,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        setItems: (items) => {
            dispatch(setItemsAC(items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);