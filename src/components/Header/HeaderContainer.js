import {connect} from "react-redux";
import Header from "./Header";



function mapStateToProps(state) {
    return {
        items: state.itemsPage.items,
    }
};

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);