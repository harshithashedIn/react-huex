import * as React from "react";
import {Header} from "../component/Header";
import "../css/Home.css";
import {CourseItem} from "../component/CourseItem";
import sort from "../assets/Group 71.svg";
import search from "../assets/Rectangle 36.svg";
import searchIcon from "../assets/Group 35.svg";
import {ICourse} from "../interface/Interfaces";
import {useEffect, useState} from "react";

interface Props {
    sendWhishList(whishList: ICourse[]): void;
}

export const HomePage = (props: Props) => {

    const [whishList, setWhishList] = useState<ICourse[]>([]);

    const getWhishList = (newWishList: ICourse[]) => {
        setWhishList(newWishList);
        props.sendWhishList(whishList);
    }
    useEffect(() => {
        props.sendWhishList(whishList);
    }, [whishList])
    return (
        <div>
            <Header title="Discover latest courses on react"/>
            <div className="home-top-container">
                <div className="left-container">
                    <div className="all-courses">All Courses</div>
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
            <CourseItem sendWhishList={getWhishList}/>
        </div>
    );
}