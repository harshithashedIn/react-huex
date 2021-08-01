import React, {createContext, useEffect, useState} from "react";
import "./App.css";
import {BrowserRouter, Route, Router, Switch, withRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {WhishListPage} from "./pages/WhishListPage";
import {ICourse} from "./interface/Interfaces";
import {ProfilePage} from "./pages/ProfilePage";


const x: ICourse[] = [{
    id: 0,
    instructor: "",
    title: "",
    discountedPrice: "",
    whishlist: false,
}];
let name = React.createContext(x);

const App = () => {
    const [whishList, setWhishList] = useState<ICourse[]>([]);
    const getWhishList = (newWishList: ICourse[]) => {
        setWhishList(newWishList);
    }

    useEffect(() => {
        setWhishList(whishList);
        name = React.createContext(whishList);
    }, [whishList])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><HomePage sendWhishList={getWhishList}/></Route>
                <Route exact path="/profile"><ProfilePage/></Route>
                <Route exact path="/whishlist">
                    <name.Provider value={whishList}><WhishListPage/></name.Provider>
                </Route>
            </Switch>
        </BrowserRouter>

    );
}
export default App;
export {name};
