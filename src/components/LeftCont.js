import React from "react";
import Text from "./Text";
import ContactInfo from "./ContactInfo";
import ShippingAddress from './ShippingAddress';
import Button from "./Button";

const LeftCont = () => {
    return (
        <div className="left-container">
            <Text 
                classes="xx-large bold"
                text="Checkout"
            />

            <ContactInfo />
            <ShippingAddress />

            <input type="checkbox" id="checkbox-input" name="checkbox-input" />
            <label htmlFor="checkbox-input">Save this information for next time</label>

            <Button btnTxt="Continue" />
        </div>
    );
}

export default LeftCont;