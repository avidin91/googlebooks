import React from "react";
import classes from "./Sort.module.css";

const Sort = (props) => {

    let newCategoriesValue = props.newValue;

    let onCategoriesValueChange = (e) => {
        let value = e.target.value;
        props.updateCategoriesValue(value)
    };

    let newSortingByValue = props.newSortingValue;

    let onSortingByValueChange = (e) => {
        let value = e.target.value;
        props.updateSortingByValue(value)
    };

    return (<div>
        <div className={classes.selectWrapPosition}>
            <span className={classes.selectSpan}>Categories </span>
            <div className={classes.findSpanResolution}>
                <select onChange={onCategoriesValueChange} name="CatSelect" value={newCategoriesValue}>
                    <option value="All">All</option>
                    <option value="ABI/INFORM (Information retrieval system)">ABI/INFORM (Information retrieval
                        system)
                    </option>
                    <option value="Communication in science">Communication in science</option>
                    <option value="Computers">Computers</option>
                    <option value="Law">Law</option>
                    <option value="Social Science">Social Science</option>
                </select>
            </div>
        </div>
        <div className={classes.selectWrapPosition}>
            <span className={classes.selectSpan}>Sorting by </span>
            <div className={classes.findSpanResolution}>
                <select onChange={onSortingByValueChange} name="SortingBy" value={newSortingByValue}>
                    <option value="Authors">Authors</option>
                    <option value="Categories">Categories</option>
                    <option value="Title">Title</option>
                </select>
            </div>
        </div>
    </div>)

}


export default Sort;