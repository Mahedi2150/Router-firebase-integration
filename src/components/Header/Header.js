import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app)
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/order'>Order</Link>
                <Link to='/register'>Register</Link>
                {
                    user?.displayName && user.displayName
                }
                {
                    user?.photoURL && <img src={user.photoURL}
                        style={{
                            width: "25px",
                            margin: '5px',
                            borderRadius: '50%'
                        }} alt="" />}
                {
                    user?.uid
                        ?
                        <button onClick={() => signOut(auth)}> Sign out</button>
                        :
                        <Link to='/login'>Log in</Link>
                }
            </nav>
        </div>
    );
};

export default Header;