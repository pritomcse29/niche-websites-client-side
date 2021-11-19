import React, { useEffect, useState } from 'react';

import Product from '../../Product/Product';

import { Link } from 'react-router-dom';
import Service from '../Service/Service';


import useCart from '../../../hooks/useCart';

import Cart from '../../Cart/Cart';
import { addToDb } from '../../../utilities/fakedb';


const Services = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (

        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOZRC_dWzO9740LO-OtudFc-Xduv7dBgtGg&usqp=CAU" style={{ width: "100%" }}></img>


            <div className="Services-container">
                <h2 className="text-center">Services:</h2>
                <hr />
                <div className="product-container">
                    {
                        //services.map(service => <Service
                        //                             key={service.name}
                        //                             service={service}


                        displayProducts.map(product => <Service
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Service>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
            <div>
                {/* <Contact></Contact>
                <Footer></Footer> */}
            </div>

        </div>
    );
};

export default Services;