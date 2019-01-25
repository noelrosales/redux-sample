import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
        <div className="card">
          <h1>Contact Us</h1>
          <form name="contact" action="/success" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: </label><input type="text" name="name" />   
                </p>
                <p>
                    <label>Your Email: </label><input type="email" name="email" />
                </p>
                <p>
                    <label>Message: </label><textarea name="message"></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
           </form>
        </div>
    </div>
  )
}

export default Contact
