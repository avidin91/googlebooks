import React from "react";
import ItemsContainer from "./components/Items/ItemsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import classes from "./App.module.css";

function App() {


 return (
        <div className={classes.relative}>
            <HeaderContainer/>
            <ItemsContainer/>
        </div>
    );
}

export default App;
