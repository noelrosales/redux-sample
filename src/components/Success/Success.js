import React from 'react';
import './Success.css';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="success">
        <div className="card">
          <h1>Thanks for reaching Us</h1>
          <Link to='/'>Go back</Link>
        </div>
    </div>
  )
}

export default Success
