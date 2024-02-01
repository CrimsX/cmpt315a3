import React from "react";

import './content.styles.css';

/*
 * Displays the contents of an email
*/

export const Content = ({ email }) => {
    if (email.length === 0) {
        return null;
    }
  
    const { from, address, time, subject, message } = email;

    return (
    <div className='container'>
        <h2 className='subject'>{subject}</h2>
        <div className='info'>
            <p><b>From:</b>  {from}</p>
            <p><b>Email:</b>  {address}</p>
            <p><b>Sent At:</b>  {time}</p>
        </div>
        <div className='body'>
            <p id='column2'>{message}</p>
        </div>
    </div>
    )};

export default Content
