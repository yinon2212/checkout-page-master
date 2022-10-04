import React from "react";
import '../css/ImageButton.css';

const ImageButton = (props) => {
    return (
        <button className="image-btn" onClick={props.onClickFunc || null}><i className={props.iconName}></i></button>
    );
}

export default ImageButton;