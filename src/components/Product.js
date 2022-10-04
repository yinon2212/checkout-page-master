import React from "react";
import Text from "./Text";
import IncDecBox from "./IncDecBox";
import '../css/Product.css';

const Product = (props) => {
    return (
        <div className="product" key={props.id}>
            <img className="product-img" src={props.productImg} alt="product-img" />
            <div className="product-info">
                <Text
                    classes="normal product-name bold"
                    text={props.productName}
                />
                <div className="all-product-prices">
                    <Text
                        classes="normal orange final-price bold"
                        text={props.productFinalPrice}
                    />

                    <Text
                        classes="small deleted bold"
                        text={props.productStartPrice}
                    />
                </div>

                <IncDecBox />
            </div>
        </div>
    );
}

export default Product;