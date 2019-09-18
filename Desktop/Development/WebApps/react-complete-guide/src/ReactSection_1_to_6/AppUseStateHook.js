//Hook useState we don't use class
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  
  const [personState, setPersonState] = useState({
    person:[
      {name:"nyira",age:"30"},
      {name:"Mbumba",age:"28"},
      {name:"Chenami",age:"2"}
    ],
    otherProps:"Other props",
  })
  
  const [otherProp, setOtherProp] = useState('some data');
  
  const switchNameHandler = () => {
    // console.log("was clicked!");
    setPersonState({
      person:[
        {name:"nyira mwalila",age:"20"},
        {name:"Mbumba Heritier",age:"18"},
        {name:"Chenami",age:"22"}
      ],
      otherProp
    })
  }

    return (
      <div className="App">
        <h1>Hi, I am react Developer!</h1>
        <p>Its really working guys</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.person[0].name} age={personState.person[0].age}/>
        <Person name={personState.person[1].name} age={personState.person[1].age}>My hobbies : Racing</Person>
        <Person name={personState.person[2].name} age={personState.person[2].age}/>
      </div>
   
    );
  
}

export default App;
