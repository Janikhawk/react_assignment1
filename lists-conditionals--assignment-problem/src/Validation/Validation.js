import React from 'react';
import './Validation.css'

const validation = (props) => {
    let shownComponent = null;
    if (props.textLength !== 0 && props.textLength < 5) {
        shownComponent = (<p className="Error">Text is too short</p>);
    } else if (props.textLength >= 5) {
        shownComponent = (<p className="Success">Text long enough</p>);
    }
 
    return (
        <div>
            {shownComponent}
        </div>
    );
};

export default validation;