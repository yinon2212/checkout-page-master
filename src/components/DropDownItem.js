import React from "react";



const DropDownItem = ({item, id}) => {
    return (
        <p key={id} className = "drop-down-item">{item}</p>
    );
}

export default DropDownItem;