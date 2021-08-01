import * as React from 'react';
import {Header} from "../component/Header";
import dp from "../assets/Mask Group 2.png";
import "../css/ProfilePage.css";

export const ProfilePage = () => {
    return (
        <div>
            <Header title="My Profile"/>
            <div className="profile-container">
                <div className="profile-left-container">
                    <img src={dp} className="dp" alt="HASHEDIN"></img>
                </div>
                <div className="profile-right-container">
                    <form>
                        <div className="first-row">
                            <div className="display-name-block">
                                <div className="display-name">
                                    Display Name
                                </div>
                                <div>
                                    <input className="input-form-2" type="text" placeholder="display Name"
                                           name="display-name"/>
                                </div>
                            </div>
                            <div className="first-name-box">
                                <div className="display-name">
                                    First Name
                                </div>
                                <div>
                                    <input className="input-form-2" type="text" placeholder="first name"
                                           name="first-name"/>
                                </div>
                            </div>
                            <div className="last-name-box">
                                <div className="display-name">
                                    Last Name
                                </div>
                                <div>
                                    <input className="input-form-2" type="text" placeholder="last name"
                                           name="last-name"/>
                                </div>
                            </div>
                        </div>
                        <div className="top-margin">
                            <div className="display-name">
                                About Yourself
                            </div>
                        </div>
                        <div>
                            <input className="input-form-3" type="text" placeholder=""
                                   name="about-yourself"/>
                        </div>
                        <div className="top-margin">
                            <div className="display-name">
                                Your area of Interest
                            </div>
                        </div>
                        <div>
                            <input className="input-form" type="checkbox" id="designer" name="designer"
                                   value="designer"/>
                            <label className="display-labels" htmlFor="designer"> Designer</label>
                        </div>
                        <div>
                            <input className="input-form" type="checkbox" id="developer" name="developer"
                                   value="designer"/>
                            <label className="display-labels" htmlFor="developer"> Developer</label>
                        </div>
                        <div>
                            <input className="input-form" type="checkbox" id="project-manager" name="project-manager"
                                   value="designer"/>
                            <label className="display-labels" htmlFor="project-manager"> Project Manager</label>
                        </div>
                        <div>
                            <input className="input-form" type="checkbox" id="sales" name="sales"
                                   value="designer"/>
                            <label className="display-labels" htmlFor="sales"> Sales</label>
                        </div>
                        <div className="top-margin">
                            <div className="display-name">
                                Are you a student or professional
                            </div>
                        </div>
                        <div>
                            <input className="input-form" type="radio" id="student" name="student" value="student"/>
                            <label className="display-labels" htmlFor="student"> Student</label>
                        </div>
                        <div>
                            <input className="input-form" type="radio" id="professional" name="professional"
                                   value="professional"/>
                            <label className="display-labels" htmlFor="professional"> Professional</label>
                        </div>
                        <div className="top-margin">
                            <div className="display-name">
                                How much experience you have?
                            </div>
                        </div>
                        <div>
                            <input className="input-form" type="radio" id="0-5" name="0-5" value="0-5"/>
                            <label className="display-labels" htmlFor="0-5"> 0-5</label>
                            <input className="input-form" type="radio" id="5-10" name="5-10" value="5-10"/>
                            <label className="display-labels" htmlFor="5-10"> 5-10</label>
                            <input className="input-form" type="radio" id="10&above" name="10&above" value="10&above"/>
                            <label className="display-labels" htmlFor="10&above"> 10 & above</label>
                        </div>
                        <div className="top-margin">
                            <div className="display-name">
                                What is your expertise?
                            </div>
                        </div>
                        <div>
                            <input className="input-form" type="radio" id="java" name="java" value="java"/>
                            <label className="display-labels" htmlFor="java"> Java</label>
                            <input className="input-form" type="radio" id="react" name="react" value="react"/>
                            <label className="display-labels" htmlFor="react"> React</label>
                            <input className="input-form" type="radio" id="backend" name="backend" value="backend"/>
                            <label className="display-labels" htmlFor="backend"> Backend</label>
                        </div>
                        <div className="top-margin">
                            <div className="display-name">
                                Mention your role
                            </div>
                        </div>
                        <div>
                            <input className="input-form-2" type="text" placeholder="role"
                                   name="role-mention"/>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}