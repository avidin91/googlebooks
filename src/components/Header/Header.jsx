import React from "react";
import classes from "./Header.module.css";
import SortContainer from "./Sort/SortContainer";


function Header(props) {
    return <div className={classes.header}>
        <div className={`${classes.position} ${classes.positionElements}`}>
            <div>
                <span className={classes.mainSpan}>Search for books</span>
            </div>
            <div className={classes.selectWrap}>
                <div><input type="search"/></div>
                <SortContainer />
            </div>
        </div>
    </div>
}

export default Header;