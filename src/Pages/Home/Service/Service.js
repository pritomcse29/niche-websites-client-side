import React from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';


import './Service.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Service = (props) => {
    // console.log(props);
    const { name, img, seller, price, star, offer, category } = props.product;

    return (
        <div className="Service">
            <div style={{ margin: "5px" }}>
                <img src={img} alt="" style={{ width: "600px", height: "400px" }} />
            </div>
            <div>
                <p><small>{name}</small></p>
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

export default Service;