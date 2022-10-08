import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from './../../hooks/useFirebase';
const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/order'>Order</Link>
                <Link to='/register'>Register</Link>
                {user?.displayName && user.displayName}
                {user?.photoURL && <img src={user.photoURL} style={{ width: "25px", borderRadius: '50%' }} alt="" />}
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}> Sign out</button>
                        :
                        <Link to='/login'>Log in</Link>
                }
            </nav>
        </div>
    );
};

export default Header;