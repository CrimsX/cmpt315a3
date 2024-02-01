import React from "react";

import './emailtile.styles.css';

/*
 * Used to display emails on the sidebar
 */

export const Tile = ({ email, onClick }) => {
    const {id, from, address, time, subject, read } = email;

    const handleClick = () => {
        onClick(id);
    };

    const tile = ((read) => {
        if (read === "false") {
            return 'email-tile';
        } else if (read === "active") {
            return 'email-tile active';
        } else {
            return 'email-tile read';
        }
    });

    return (
        <div className={tile(read)} onClick={handleClick}>
            <h2 id='header'>{from}</h2>
            <p>{subject}</p>
            <p>{address}</p>
            <p>{time}</p>
        </div>
    )};

export default Tile;
