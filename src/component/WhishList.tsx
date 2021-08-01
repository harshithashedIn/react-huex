import * as React from "react";
import {ICourse} from "../interface/Interfaces";
import arrow from "../assets/Path 20.svg";
import deleteIcon from "../assets/noun_Delete_3715928.svg";
import {CartDetailItem} from "./CartDetailItem";
import {useEffect, useState} from "react";
import CSS from "csstype";
import "../css/whishlist.css";

export const WhishList = () => {

    const [courseList, setCourseList] = useState<ICourse[]>([]);
    const [cartCourseList, setCartCourseList] = useState<ICourse[]>([]);
    const [refresh, setRefresh] = useState(false);

    const handleWhishList = (course: ICourse) => {
        let status: boolean = course.whishlist;
        course.whishlist = !status;
        courseList.map((c: ICourse) => {
            if (c.id == course.id) {
                c.whishlist = !status;
            }
        })
        localStorage.setItem('courselist', JSON.stringify(courseList));
        setRefresh(!refresh);
    }

    useEffect(() => {
        const courseListString = JSON.parse(localStorage.getItem('courselist') as string);
        const courselistlocal = courseListString as ICourse[];
        setCourseList(courselistlocal);
    }, [refresh]);

    const handleCart = (course: ICourse) => {
        let flag: boolean = true;
        cartCourseList.map((c: ICourse) => {
            if (course.id === c.id) {
                flag = false;
                console.log("already exists");
            }
        })
        if (flag) {
            setCartCourseList([...cartCourseList, course]);
        }
    }

    const lineStyle: CSS.Properties = {
        height: '2px',
        borderWidth: 0, color: "gray",
        backgroundColor: "gray"
    };

    return (
        <div>
            <div className="home-container">
                <div className="left-bottom-container">
                    {courseList.map((course: ICourse) => {
                        if (course.whishlist === true) {
                            return (
                                <div className="container">
                                    <div className="empty-box"></div>
                                    <div className="title-box">
                                        <div className="title">
                                            {course.title}
                                        </div>
                                    </div>
                                    <div className="instructor">
                                        {course.instructor}
                                    </div>
                                    <div className="price">
                                        {course.discountedPrice}
                                    </div>
                                    <div className="cart-btn">
                                        <button className="add-to-cart" onClick={() => {
                                            handleCart(course);
                                        }}>ADD TO CART
                                        </button>
                                    </div>
                                    <div className="delete-icon" onClick={() => {
                                        handleWhishList(course)
                                    }}>
                                        <input type="image" src={deleteIcon} name="delete" alt="delete"/>
                                    </div>
                                    <div className="arrow">
                                        <input type="image" src={arrow} name="arrow" alt="arrow"/>
                                    </div>
                                </div>
                            );
                        }
                    })
                    }
                </div>
                <div className="right-bottom-container">
                    <div className="heading">YOUR CART DETAILS</div>
                    <hr className="horizontal-line" style={lineStyle}/>
                    {cartCourseList.map((course: ICourse) => {
                        return (
                            <CartDetailItem course={course}/>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    );
}