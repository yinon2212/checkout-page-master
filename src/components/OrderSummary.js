import React from "react";
import OSFooter from "./OSFooter";
import Product from "./Product";
import '../css/OrderSummary.css';

const products = [
    {
        productImg: require("../res/photo1.png"),
        productName: "Vintage Backbag",
        productFinalPrice: "$54.99",
        productStartPrice: "$94.99"
    },
    {
        productImg: require("../res/photo2.png"),
        productName: "Levi Shoes",
        productFinalPrice: "$74.99",
        productStartPrice: "$124.99"
    }
];

/*This function gets product details and id and returns new product component*/
const generateProduct = (product, id) => {
    return (
        <Product
            id={id}
            productImg={product.productImg}
            productName={product.productName}
            productFinalPrice={product.productFinalPrice}
            productStartPrice={product.productStartPrice}
        />
    );
}

const OrderSummary = (props) => {

    const productsComps = products.map((product, id) => {
        return generateProduct(product, id);
    });

    return (
        <div className="order-summary">
            <div className="products-container">
                {productsComps}
            </div>
            <OSFooter
                shipPrice="$19"
                totalPrice="$148.98"
            />
        </div>
    );
}

export default OrderSummary;