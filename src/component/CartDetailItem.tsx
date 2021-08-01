import * as React from "react";
import {useEffect, useState} from "react";
import {ICourse} from "../interface/Interfaces";
import "../css/CartDetailItem.css";
import CSS from "csstype";

interface Props {
    course: ICourse
}


const lineStyle: CSS.Properties = {
    height: '2px',
    borderWidth: 0, color: "gray",
    backgroundColor: "gray"
};

export function CartDetailItem(props: Props) {
    const [course, setCourse] = useState<ICourse>();
    return (
        <div>
            <div className="flex-box-right">
            <div className="empty-box-2"></div>
            <div className="title-box-2">
                <div className="title-2">
                    {props.course.title}
                </div>
                <div className="price-2">
                    {props.course.discountedPrice}
                </div>
            </div>
            </div>
            <hr className="horizontal-line" style={lineStyle}/>
        </div>
    );
}