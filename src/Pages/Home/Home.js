import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';


import './Home.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import AllReviews from '../AllReview/AllReview';
import Review from '../Review/Review';
import AllReview from '../AllReview/AllReview';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('https://protected-spire-55400.herokuapp.com/cars')
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
        // save to local storage (for now)
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


            <div className="Home-container">
                <h2 className="text-center">Foods:</h2>
                <hr />
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
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
                <AllReview />
                <Contact></Contact>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;