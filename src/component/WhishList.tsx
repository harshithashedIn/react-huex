import * as React from "react";
import {ICourse} from "../interface/Interfaces";
import arrow from "../assets/Path 20.svg";
import deleteIcon from "../assets/noun_Delete_3715928.svg";
import {CartDetailItem} from "./CartDetailItem";
import {useEffect, useState} from "react";
import {courses} from "../lists/Courses";
import CSS from "csstype";


export const WhishList = () => {

    const [courseList, setCourseList] = useState<ICourse[]>([]);
    const [cartCourseList, setCartCourseList] = useState<ICourse[]>([]);

    useEffect(() => {
    }, [])

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
                                <div className="delete-icon">
                                    <input type="image" src={deleteIcon} name="delete" alt="delete"/>
                                </div>
                                <div className="arrow">
                                    <input type="image" src={arrow} name="arrow" alt="arrow"/>
                                </div>
                            </div>
                        );
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