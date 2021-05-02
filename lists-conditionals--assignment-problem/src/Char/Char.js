import React from 'react';
import './Char.css'

const char = (props) => {
    return (
        <div className="inline-box" onClick={props.charClick}>
            <div>{props.letter}</div>
        </div>
    );
};

export default char;