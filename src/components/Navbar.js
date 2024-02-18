import React from 'react'
import images from '../img_src/images.jpeg';
import { Link } from 'react-router-dom';
import { FaUser, } from 'react-icons/fa';

function Navbar() {

    // check if the user is logged in
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={images} className="App-logo" alt='cat logo'/>
                <p>CC's Apartment Rental Website</p>
            </div>
            <ul className='navbar-menu'>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/apartments'> Apartments </Link></li>
                <li><Link to='/contact'> Contact Us </Link></li>
                <li><Link to='/blog'> Blog </Link></li>
                {isLoggedIn ? (
                    <li>
                        <Link to='/user-dashboard'> <FaUser/> </Link>
                    </li>
                ) : (
                    <li><Link to='/login'> Login </Link></li>
                )}
            </ul>
        </div>
    )
}

export default Navbar