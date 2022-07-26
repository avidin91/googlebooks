import React from "react";
import classes from "./Search.module.css";

class Search extends React.Component {

    constructor() {
        super();
        this.updateSearchValueDispatch = this.updateSearchValueDispatch.bind(this);
    }

    updateSearchValueDispatch(e) {
        let value = e.target.value;
        this.props.setSearchValue(value)
    };


    render() {
        return <div>
            <input type="search" onChange={this.updateSearchValueDispatch} defaultValue={this.props.searchValue}/>
            <div className={classes.onSearchDiv} style={{display: this.props.searchValue ? 'block' : 'none'}}>
                test
                <div>
                    {this.props.items.map(item => <div>{item.volumeInfo.title}</div>)}
                </div>
            </div>
        </div>
    }
}

export default Search;