import React from 'react';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()} >Google Sign in</button>
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