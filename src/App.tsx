import React, {useEffect, useState} from "react";
import "./App.css";
import {BrowserRouter, Route, Router, Switch, withRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {WhishListPage} from "./pages/WhishListPage";
import {ProfilePage} from "./pages/ProfilePage";


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><HomePage/></Route>
                <Route exact path="/profile"><ProfilePage/></Route>
                <Route exact path="/whishlist"><WhishListPage/></Route>
            </Switch>
        </BrowserRouter>

    );
}
export default App;
