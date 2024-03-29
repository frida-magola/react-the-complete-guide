import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) =>{
    return <Person 
              name={person.name} 
              age={person.age}
              changed={(event) => props.changed(event,person.id)}
              click={() => props.clicked(index)}
              // click={this.switchNameHandler.bind(this,'Rukiya')}
              key={person.id}
            >
              My hobbies : Racing
            </Person>
  })
export default persons;