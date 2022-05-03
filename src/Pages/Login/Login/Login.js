import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/useFirebase';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUsingGoogle, error, loginAuth } = useFirebase();
    // console.log(user.email);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(user)
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginAuth(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
    const handleGoogleAuth = () => {
        loginUsingGoogle(location, navigate);
    }
    return (
        <div>
            <Navbar />
            <div className="width-control row login-page">
                <div className="col-sm-12 col-md-4">

                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000" className="col-sm-12 col-md-4 login-form">
                    <h3>Log in or sign up in seconds</h3>
                    <form onSubmit={handleLoginSubmit}>
                        <input required onBlur={handleOnBlur} name="email" type="email" placeholder='Your email' />
                        <br />
                        <input required onBlur={handleOnBlur} name="password" type="password" placeholder='Your password' />
                        <br />
                        <p className='mt-3'>New user? please <Link to="/reg">Register</Link></p>
                        <input className='submit-btn mb-3' type="submit" value="Submit" />
                    </form>
                    <button onClick={handleGoogleAuth} className='hvr-sweep-to-bottom hvr-ripple-out google-login d-flex align-items-center'> <span><img className='google-icon fs-6' src='' alt="" /></span> <span className='google-content text-center'>Continue With Google</span></button>
                    {error && <p>{error}</p>}
                    <br />
                </div>
                <div className="col-sm-12 col-md-4">

                </div>
            </div>
        </div>
    );
};

export default Login;