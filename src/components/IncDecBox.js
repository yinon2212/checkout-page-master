import React from "react";
import Text from "./Text";
import ImageButton from "./ImageButton";
import '../css/IncDecBox.css';

const IncDecBox = ({quantity}) => {
    return (
        <div className="inc-dec-box">
            <ImageButton iconName="fas fa-minus" />
            <Text classes="normal bold" text={quantity || "1"} />
            <ImageButton iconName="fas fa-plus" />
        </div>
    );
}

export default IncDecBox;