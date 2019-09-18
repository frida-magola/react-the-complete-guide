import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const assignClasses = [];
    
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red; 
    }
    
    if(props.persons.length <= 2){
      assignClasses.push(classes.red); //classes['red']
    }
    if (props.persons.length <= 1) {
      assignClasses.push(classes.bold); //classes['red','bold']
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>Its really working guys</p>
            <button onClick={props.togglePerson} className={btnClass}>Toggle Person</button>
        </div>
            
    )
}

export default cockpit;