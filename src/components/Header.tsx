import { useState } from "react";
import '../App.css';

function Header(props) {

    return (
        <div className="header">
        <div className="points">
            <h4>Current Score: {props.currentScore}</h4>
            <h4>Best Score: {props.bestScore}</h4>
        </div>
            <h5>Don't click on the same image twice!</h5>
        </div>
    )
}

export default Header;