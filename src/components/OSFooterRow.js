import React from "react";
import Text from "./Text";
import '../css/OSFooterRow.css';

const OSFooterRow = ({topic, price}) => {
    return (
        <div className="order-summary-footer-row">
                <Text
                    classes="topic normal bold"
                    text={topic}
                />

                <Text
                    classes="price small bold"
                    text={price}
                />
            </div>
    );
}

export default OSFooterRow;