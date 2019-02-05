import React from 'react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav>
        <div className='brand'>
            <Link to='/'>Post It - Mark It- Delete It</Link>
        </div>
        <ul>
            <li><NavLink to='/posts'>Posts</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
