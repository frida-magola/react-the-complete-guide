import React,{useEffect} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props  => {
  // we can have many useEffect
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
    // HTTP request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    },1000);
    
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
    }, []);
    
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    });
  
    const assignClasses = [];
    
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red; 
    }
    
    if(props.personsLength <= 2){
      assignClasses.push(classes.red); //classes['red']
    }
    if (props.personsLength<= 1) {
      assignClasses.push(classes.bold); //classes['red','bold']
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>Its really working guys</p>
            <button onClick={props.togglePerson} className={btnClass}>Toggle Person</button>
            <button onClick={props.login}>Log in</button>
        </div>
            
    )
}

export default React.memo(Cockpit);