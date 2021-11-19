import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

import ReviewItem from '../ReviewItem/ReviewItem';

import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import Cart from '../Cart/Cart';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';


const OrderReview = () => {
    const [foods] = useProducts();
    const [cart, setCart] = useCart(foods);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/users/add');
    }

    return (
        <div className="shop-container">

            <Navigation />
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn-regular">Proceed to Shipping</button>
                </Cart>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderReview;