import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <div className="login-form">
                <div >
                    <h2>Please Login</h2>
                    <br />


                    <button
                        className="btn-regular h-25"
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;