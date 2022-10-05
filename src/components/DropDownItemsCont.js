import React from "react";
import DropDownItem from "./DropDownItem";

const generateItem = ((item, id) => {
    return <DropDownItem id={id} item={item} />
});

const DropDownItemsCont = (props) => {
    
    const ddItems = props.items.map((item, id) => {
        return generateItem(item, id);
    });
    
    
    return (
        <div className="drop-down-items-container" style={{display: props.open ? "block" : "none"}}>
            {ddItems}
        </div>
    );
}


export default DropDownItemsCont;