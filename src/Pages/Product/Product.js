import React from 'react';

import './Product.css';
// import Rating from 'react-rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import Service from '../Home/Service/Service';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, star, offer, category } = props.product;

    return (
        <div className="product">
            <div style={{ margin: "5px" }}>
                <img src={img} alt="" style={{ width: "600px", height: "400px" }} />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller} Car Shop</small></p>
                <p>Price: {price}</p>
                <p><small>Car Is Available Now - order soon</small></p>
                <p>Description:{category}</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;