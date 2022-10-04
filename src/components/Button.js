import React from "react";
import '../css/Button.css';

const Button = ({btnTxt}) => {
    return (
        <button className="button">{btnTxt}</button>
    );
}

export default Button;