import { useState } from "react";
import '../App.css';

function Header(props) {

    return (
        <div className="header">
            <h4>Current Score: {props.currentScore}</h4>
            <h4>Best Score: {props.bestScore}</h4>
        </div>
    )
}

export default Header;