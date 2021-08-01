import * as React from "react";
import "../css/Modal.css";
import modalContainer from "../assets/modal cont.svg";
import already from "../assets/Already Exist in cart.svg";
import top from "../assets/Group 59.svg";
import exclamation from "../assets/noun_exclamation_939973.svg";
import xyz from "../assets/xyz.svg";
import cross from "../assets/Path 36.svg";


interface Props {
    open: boolean;
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Modal(props: Props) {
    if (props.open) {
        return (
            <>
                <div className="overlay-styles"/>
                <div className="modal-styles">
                    <div className="modal-container">
                        <img src={modalContainer} className="modal" alt="HASHEDIN"></img>
                        <img src={top} className="top" alt="HASHEDIN"></img>
                        <img src={cross} className="cross" alt="HASHEDIN"></img>
                        <img src={exclamation} className="exclamation" alt="HASHEDIN"></img>
                        <img src={already} className="already" alt="HASHEDIN"></img>
                        <img src={xyz} className="xyz" alt="HASHEDIN"></img>
                        <button onClick={props.onClose}>close</button>
                    </div>
                </div>
            </>
        );
    }
    return null;
}