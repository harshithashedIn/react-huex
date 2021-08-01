import * as React from "react";
import {Header} from "../component/Header";
import sort from "../assets/Group 71.svg";
import search from "../assets/Rectangle 36.svg";
import searchIcon from "../assets/Group 35.svg";
import {WhishList} from "../component/WhishList";
import {ICourse} from "../interface/Interfaces";
import {useContext, useEffect} from "react";
import {name} from "../App";


export const WhishListPage = () => {
    const nam = useContext(name);
    useEffect(() => {
        console.log(nam);
    })

    return (
        <div>
            <Header title="Discover latest courses on react"/>
            <div className="home-top-container">
                <div className="left-container">
                    <div className="all-courses">My Whishlist</div>
                    <div>
                        <img src={sort} className="sort" alt="HASHEDIN"></img>
                    </div>
                </div>
                <div className="right-container">
                    <input className="search-bar" type="text" placeholder="Search.." name="search"/>
                    <div className="search-container">
                        <img src={search} className="search" alt="HASHEDIN"></img>
                        <img src={searchIcon} className="search-icon" alt="HASHEDIN"></img>
                    </div>
                </div>
            </div>
            {/*<WhishList whishList={props.whishList}/>*/}
        </div>
    );
}