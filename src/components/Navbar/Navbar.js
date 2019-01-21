import React from 'react';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav>
        <div className='brand'>
            <Link to='/'>Not Reminder</Link>
        </div>
        <ul>
            <li><NavLink to='/posts'>Posts</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
