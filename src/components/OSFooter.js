import React from "react";
import OSFooterRow from "./OSFooterRow";

const OSFooter = (props) => {
    return (
        <div className="order-summary-footer">
            <OSFooterRow
                topic="Shipping"
                price={props.shipPrice}
            />

            <OSFooterRow
                topic="Total"
                price={props.totalPrice}
            />   
        </div>
    );
}

export default OSFooter;