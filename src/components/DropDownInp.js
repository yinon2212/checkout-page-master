import React from "react";
import ImageButton from "./ImageButton";
import InputField from "./InputField";
import DropDownItemsCont from "./DropDownItemsCont";
import '../css/DropDownInp.css';

const dropDownItems = ["Israel", "United States", "Germany"]

const DropDownInp = (props) => {

    const [open, setDDState] = React.useState(false);

    const toggleState = () => {
        setDDState(!open);
    }

    return (
        <div className="drop-down-container">
            <InputField 
                inputTopic="Country"
                iconName="fas fa-globe-africa"
                placeholder="Your Country..."
                validateInput={false}
            />
            <ImageButton iconName={props.iconName} onClickFunc={toggleState} />
            <DropDownItemsCont
                open={open}
                items={dropDownItems}
            />
        </div>
    );
    
}


export default DropDownInp;