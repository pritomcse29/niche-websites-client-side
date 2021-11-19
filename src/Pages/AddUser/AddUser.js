
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { clearTheCart } from '../../utilities/fakedb';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const AddUser = () => {
    const { reset } = useForm();
    const nameRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    // const orderUpdateRef = useRef();
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const phone = phoneRef.current.value;
        // const orderUpdate = orderUpdateRef.current.value;
        // , orderUpdate 
        const newUser = { city, phone, name, email, address };

        fetch('https://protected-spire-55400.herokuapp.com/users/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('Order Processed Successfully');
                    clearTheCart()
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="text-center">
            <Navigation></Navigation>
            <h2>Cutomer Details</h2>
            <form onSubmit={handleAddUser}>
                Name:<input type="text" placeholder="Name" ref={nameRef} name="" id="" /> <br /><br />
                Email:  <input type="email" placeholder="email" ref={emailRef} name="" id="" /> <br /><br />
                City: <input placeholder="City" type="text" ref={cityRef} name="" id="" />  <br /><br />
                Phone:<input placeholder="phone number" type="tel" ref={phoneRef} name="" id="" /> <br /><br />
                Address:<input type="text" placeholder="Address" ref={addressRef} name="" id="" /> <br /><br />


                <input type="submit" value="Submit" />
                <br />
                <h2>For Review Our Page :</h2>
                <Link to="/reviewsss"><Button style={{ textDecoration: 'none' }}>Review</Button></Link>
            </form>


            <Footer></Footer>
        </div>



    );
};

export default AddUser;