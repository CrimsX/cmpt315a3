import React from "react";
import {Tile} from '../emailtile/emailtile.component';

import "./emaillist.styles.css";

/*
 * Display component in a singular column
 */

export const EmailList = ({ emails, onSidebarClick }) => (
    <div className='emaillist'>
        {emails.map(email => (
            <Tile key={email.id} email={email} onClick={onSidebarClick} />
        ))}
    </div>
    );

export default EmailList;
