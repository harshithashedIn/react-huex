import * as React from 'react';
import {ICourse} from '../interface/Interfaces';
import {useEffect, useState} from "react";
import {courses} from "../lists/Courses";
import "../css/CourseItem.css";
import arrow from "../assets/Path 20.svg";
import star from "../assets/Path 28.svg";
import yellowStar from "../assets/Path 29.svg";
import {CartDetailItem} from "./CartDetailItem";
import CSS from "csstype";
import {Modal} from "./Modal";

interface Props {
    sendWhishList(whishList: ICourse[]): void;
}

export function CourseItem(props: Props) {
    const [courseList, setCourseList] = useState<ICourse[]>([]);
    const [cartCourseList, setCartCourseList] = useState<ICourse[]>([]);
    const [whishList, setWhishList] = useState<ICourse[]>([]);
    const [open, setOpen] = useState(false);


    const handleWhishList = (course: ICourse) => {
        let status: boolean = course.whishlist;
        course.whishlist = !status;
        setWhishList([...whishList, course]);
        props.sendWhishList(whishList);
    }

    useEffect(() => {
        setCourseList(courses);
        props.sendWhishList(whishList);
    }, [whishList])


    const handleCart = (course: ICourse) => {
        let flag: boolean = true;
        cartCourseList.map((c: ICourse) => {
            if (course.id === c.id) {
                flag = false;
                console.log("Already exists in cart");
                setOpen(true);
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
                                    {/*<div>*/}
                                    {/*    <span>*/}
                                    {/*        <button className="react-button">React</button>*/}
                                    {/*    </span>*/}
                                    {/*    <span>*/}
                                    {/*        <button className="react-button2">React</button>*/}
                                    {/*    </span>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="instructor">
                                    {course.instructor}
                                </div>
                                <div className="star" onClick={() => {
                                    handleWhishList(course);
                                }}>
                                    {course.whishlist ? (
                                        <input type="image" src={yellowStar} name="star" alt="star"/>
                                    ) : (
                                        <input type="image" src={star} name="star" alt="star"/>
                                    )}
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
            <Modal open={open} onClose={() => {
                setOpen(false)
            }}/>
        </div>
    );
}
