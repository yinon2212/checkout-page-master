import React from "react";
import Text from "./Text";
import InputField from "./InputField";
import DropDownInp from "./DropDownInp";
import '../css/InputsContainers.css';

const ShippingAddress = () => {
    return (
        <div className="shipping-address">
            <Text 
                classes="normal bold"
                text="Shipping address"
            />

            <InputField 
                inputTopic="Full name"
                iconName="fas fa-user-circle"
                placeholder="Your name..."
                validateInput={false}
            />

            <InputField 
                inputTopic="Address"
                iconName="fas fa-home"
                placeholder="Your address..."
                validateInput={false}
            />

            <InputField 
                inputTopic="City"
                iconName="fas fa-city"
                placeholder="Your city..."
                validateInput={false}
            />

            <div className="regional-inputs">
                <DropDownInp 
                    inputTopic="Country"
                    iconName="fas fa-angle-down"
                    placeholder="Your country..."
                />

                <InputField 
                    inputTopic="Postal code"
                    iconName="fas fa-mail-bulk"
                    placeholder="Your postal code..."
                    validateInput={false}
                />  
            </div>
        </div>
    );
}

export default ShippingAddress;