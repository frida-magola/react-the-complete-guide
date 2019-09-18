import React from 'react';
const validation = (props) => {
    let validationInput = "Text is enough Long!";
    if (props.userInputLength <= 5) {
        validationInput = "Text is too short!";
    }
    
    return (
        <div>
            <p>{validationInput}</p>
        </div>
    )
}
export default validation;