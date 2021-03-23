import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div>
            <p>Username: {props.userName}</p>
            <p>age: {props.age}</p>
        </div>
    );
};

export default userOutput;