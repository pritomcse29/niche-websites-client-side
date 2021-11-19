import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllReview = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://protected-spire-55400.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    //DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            const url = `https://protected-spire-55400.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                });
        }
    }
    return (
        <div>
            <h2>All Reviews Are Available:{users.length}</h2>
            <ul style={{ marginBottom: '15', border: '2px solid gray' }}>
                {
                    users.map(user => <li style={{ marginBottom: '15', border: '2px solid gray' }}
                        key={user._id}
                    >Name:{user.name}  <br /> City:{user.city}<br /> Comment:{user.comment}<br />
                        {/* <br />Order Status:{user.orderUpdate}<br /> */}
                        {/* orderStatus:<input type="text" placeholder="Address" value="pending" name="" id="" /> <br /><br /> */}
                        {/* <Link to={`/users/update/${user._id}`}> <button>Update</button></Link>

                        <button onClick={() => handleDeleteUser(user._id)}>Delete</button> */}
                    </li>)


                }
            </ul>
        </div>
    );
};

export default AllReview;