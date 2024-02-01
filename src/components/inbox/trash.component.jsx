import React from "react";

/*
 * Button to only show emails with the tag 'trash'
 */

export const Trash = ({onClick}) => {
    const handleClick = () => {
        onClick('trash');
    }
  
    return (
    <text
      className='trash'
      onClick={handleClick}
    />
    )
}

export default Trash;
