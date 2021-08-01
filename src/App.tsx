import React, {useEffect, useState} from "react";
import "./App.css";
import {BrowserRouter, Route, Router, Switch, withRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {WhishListPage} from "./pages/WhishListPage";
import {ICourse} from "./interface/Interfaces";
import {ProfilePage} from "./pages/ProfilePage";


const App = () => {
    const [whishList, setWhishList] = useState<ICourse[]>([]);
    const getWhishList = (newWishList: ICourse[]) => {
        setWhishList(newWishList);
    }

    useEffect(() => {
        setWhishList(whishList);
        console.log("hello")
        console.log(whishList);
    }, [whishList])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><HomePage sendWhishList={getWhishList}/></Route>
                <Route exact path="/profile"><ProfilePage/></Route>
                <Route exact path="/whishlist"><WhishListPage whishList={whishList}/></Route>
            </Switch>
        </BrowserRouter>

    );
}
export default App;
