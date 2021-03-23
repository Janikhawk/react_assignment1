import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className='User-Input'>
            <input type="text"  onChange={props.changed} value={props.userName}></input>
        </div>
    );
};

export default userInput;