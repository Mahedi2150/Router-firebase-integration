import React from 'react';
import './Login.css'
import useFirebase from './../../hooks/useFirebase';
const Login = () => {
    const { signinWithGoogle } = useFirebase();

    return (
        <div>
            <h2>Please login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signinWithGoogle} >Google Sign in</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='Enter password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;