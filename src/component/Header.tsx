import * as React from "react";
import "../css/Header.css";
import logo from "../assets/Logo-2.png";
import cart from "../assets/shopping-cart.svg";
import profile from "../assets/noun_profile_2068277.svg";
import blackHeader from "../assets/Mask Group 1.png";

interface Props {
    title: string
}

export function Header(props: Props) {
    return (
        <div>
            <div className="topnav">

                <a href="/"><img style={{justifySelf: "flexStart"}} src={logo} alt="HASHEDIN"
                                 className="logo"></img></a>
                <div className="rightnav">
                    <a className="courses" href="/">COURSES</a>
                    <a className="my-whishlist" href="/whishlist">MY WHISHLIST</a>
                    <a href=""><img src={cart} className="cart" alt="HASHEDIN"></img></a>
                    <a href="/profile"><img src={profile} className="profile" alt="HASHEDIN"></img></a>
                </div>
            </div>
            <div className="black-container">
                <div className="title-white">{props.title}</div>
                <img src={blackHeader} alt="HASHEDIN" className="black-react"></img>
            </div>
        </div>
    );
}
