import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Navigation from '../Shared/Navigation/Navigation';

const UpdateUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://protected-spire-55400.herokuapp.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
    const handleNameChange = e => {
        const updatedName = e.target.value;
        // console.log(e.target.value);
        const updatedUser = { name: updatedName, email: user.email, address: user.address };
        setUser(updatedUser);
    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, email: updatedEmail, address: user.address }
        setUser(updatedUser);
    }

    const handleAddressChange = e => {
        const updatedAddress = e.target.value;

        const updatedUser = { name: user.name, email: user.email, address: updatedAddress };
        setUser(updatedUser);
    }
    const handleUpdateUser = e => {
        const url = `https://protected-spire-55400.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully.')
                    setUser({});
                }
            })
        e.preventDefault();
    }
    return (
        <div >
            <Navigation />
            {/* <p><small>{id}</small></p> */}
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} /><br /><br />
                <input onChange={handleEmailChange} type="email" value={user.email || ''} /><br /><br />
                <input onChange={handleAddressChange} type="text" value={user.address || ''} /><br /><br />
                <input type="submit" value="Update" />
            </form>
            <h2>Update:<br />Name: {user.name} <br /> Email:{user.email} <br /> Address:{user.address}</h2>
        </div>
    );
};

export default UpdateUser;