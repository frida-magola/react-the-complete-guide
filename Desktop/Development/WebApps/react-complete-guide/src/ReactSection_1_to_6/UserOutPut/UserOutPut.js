import React from 'react';
import './UserOutPut.css';

const userOutPut = (props) => {
    return(
    <div className="UserOutput"> 
        <p>Username: {props.name}</p>
        <p>Then fill out a form and you'll have your own custom image created on the fly.</p>
    </div>
    )
}

export default userOutPut;