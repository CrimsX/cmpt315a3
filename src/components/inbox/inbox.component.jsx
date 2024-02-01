import React from "react";

/*
 * Button to only show emails with the tag 'inbox'
 */

export const Inbox = ({onClick}) => {
    const handleClick = () => {
        onClick('inbox');
    }
  
    return (
    <text
      className="inbox"
      onClick={handleClick}
    />
    )
}

export default Inbox
