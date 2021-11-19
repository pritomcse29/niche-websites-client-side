import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json)
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setEmail('');
                    setSuccess(true);
                }

            })
        e.preventDefault()
    }
    return (
        <div>



            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic"
                    label="write a email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"></TextField>
                <br />   <br />
                <Button type="submit" variant="outlined">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;