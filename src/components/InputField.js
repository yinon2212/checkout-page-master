import React from "react";
import Text from "./Text";
import '../css/InputField.css';

const InputField = (props) => {

    const [inputValue, setInputValue] = React.useState("");
    const [inputValid, setInputValid] = React.useState(props.validateInput ? false : true);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        if(props.validateInput){
            validateInput();
        }
    }

    const validateInput = () => {
        setInputValid(props.validationFunction(inputValue) ? true : false);
    }

    return (
        <div className={`input-container ${(inputValid) ? "" : "invalid-input"}`}>
            <Text 
                classes="x-small input-topic"
                text={props.inputTopic}
            />
            <div className="input-field">
                <i className={`input-icon ${props.iconName}`}></i>
                <input className="input" placeholder={props.placeholder} value={inputValue} onChange={onInputChange} />
            </div>
        </div>
    );
}

export default InputField;