import React from "react";
import Text from "./Text";
import InputField from "./InputField";
import '../css/InputsContainers.css';

const ContactInfo = () => {

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    return (
        <div className="contact-info">
            <Text 
                classes="normal bold"
                text="Contact information"
            />

            <InputField 
                inputTopic="E-mail"
                iconName="fas fa-inbox"
                placeholder="Enter your email..."
                validateInput={true}
                validationFunction={validateEmail}
            />

            <InputField 
                inputTopic="Phone"
                iconName="fas fa-phone"
                placeholder="Enter your phone..."
            />

        </div>
    );
}

export default ContactInfo;