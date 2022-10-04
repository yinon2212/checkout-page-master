import React from "react";
import ImageButton from "./ImageButton";
import InputField from "./InputField";
import '../css/DropDownInp.css';

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
            <div className="drop-down-items-container" style={{display: open ? "block" : "none"}}>
                <p className="drop-down-item">Israel</p>
                <p className="drop-down-item">United States</p>
                <p className="drop-down-item">Germany</p>
            </div>
        </div>
    );
    
}


export default DropDownInp;