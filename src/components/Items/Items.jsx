import React from "react";
import classes from "./Items.module.css";
import axios from "axios";

class Items extends React.Component {
    componentDidMount() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms').then(response => {
            this.props.setItems(response.data.items)
        })
    };

    show(authors) {
        if (authors !== undefined) {
            if (authors.length > 3) {
                return authors.slice(0, 3)
            } else {
                return authors
            }
        }

    };

    test() {
        return this.props.items;
    };

    render() {

        let filter;

        let optionsForAllCategoriesFilter = this.props.catValue === 'All';

        let optionsForAnothersCategoriesFilter = this.props.catValue === 'ABI/INFORM (Information retrieval system)' || this.props.catValue === 'Communication in science' || this.props.catValue === 'Computers' || this.props.catValue === 'Law' || this.props.catValue === 'Social Science';

        let sortingBy;

        let optinonsForSortinBy = this.props.sortingByValue;

        let sortingByConditions = () => {
            if (optinonsForSortinBy === 'Authors') {
                sortingBy = (a, b) => (a.volumeInfo.authors > b.volumeInfo.authors) ? 1 : -1;
            } if (optinonsForSortinBy === 'Categories') {
                sortingBy = (a, b) => (a.volumeInfo.categories > b.volumeInfo.categories) ? 1 : -1;
            } if (optinonsForSortinBy === 'Title') {
                sortingBy = (a, b) => (a.volumeInfo.title > b.volumeInfo.title) ? 1 : -1;
            }
        }


        if (optionsForAllCategoriesFilter && optinonsForSortinBy) {
            filter = this.props.items.filter(i => i == i);
            sortingByConditions();
        } if (optionsForAnothersCategoriesFilter) {
            filter = this.props.items.filter(i => i.volumeInfo.categories == this.props.catValue);
            sortingByConditions();
        }

        return <div className={classes.position}>
            <span className={classes.findSpan}>Found {this.props.items.length} results</span>
            <div className={classes.grid}>
                {filter.sort(sortingBy).map(items => <div className={classes.resultBlock}>
                    <div className={classes.imgPosition}>
                        <img src={items.volumeInfo.imageLinks.thumbnail} alt=""/>
                    </div>
                    <div className={classes.spanZero}>
                        <a href='#' className={classes.categories}>
                            {items.volumeInfo.categories}
                        </a>
                    </div>
                    <div className={classes.spaniel}>
                        <span className={classes.title}>
                            {items.volumeInfo.title}
                        </span>
                    </div>
                    <div className={classes.spaniel}>
                        <span className={classes.authors}>
                            {this.show(items.volumeInfo.authors)}
                        </span>
                    </div>
                </div>)}
            </div>
        </div>;

    }
}

export default Items;