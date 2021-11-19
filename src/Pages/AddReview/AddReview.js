
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { clearTheCart } from '../../utilities/fakedb';

import Navigation from '../Shared/Navigation/Navigation';

const AddReview = () => {
    const { reset } = useForm();
    const nameRef = useRef();

    const commentRef = useRef();


    // const orderUpdateRef = useRef();
    const handleAddReview = e => {
        const name = nameRef.current.value;

        const comment = commentRef.current.value;


        // const orderUpdate = orderUpdateRef.current.value;
        // , orderUpdate 
        const newUser = { name, comment };

        fetch('http://localhost:5000/users/', {
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

            <h2 style={{ marginTop: '100' }}>All Reviews </h2>
            <form onSubmit={handleAddReview}>
                Name:<input type="text" placeholder="Name" ref={nameRef} name="" id="" /> <br /><br />


                Comment:<textarea type="text" placeholder="Please Write about our Service" ref={commentRef} name="" id="" /> <br /><br />


                <input type="submit" value="Submit" />
            </form>


        </div>



    );
};

export default AddReview;