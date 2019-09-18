import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
  state ={
    persons:[
      {id:"1nyira",name:"nyira",age:"30"},
      {id:"2Mbumba",name:"Mbumba",age:"28"},
      {id:"3Chenami",name:"Chenami",age:"2"}
    ],
    username: "",
    showPerson: false,
  }
  
  onChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p =>{return p.id === id});
    
    const person = {
      ...this.state.persons[personIndex]
    };
    //or use Object.assign()
    // const person = Object.assign({},this.state.persons[personIndex])
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons:persons});
  }
  
  togglePersonHandler = () => {
    const showPerson = this.state.showPerson;
    this.setState({showPerson:!showPerson});
  }
  
  deletePersonHandler = (personIndex) => {
    //create a new copy of the object before manupilation. with slice() 
    //or use a spread ES6 syntaxe its a good pratice
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    //delete on element from the array with splice()
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  
  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons =
          <div>
            <Persons 
              persons={this.state.persons} 
              changed={this.onChangedHandler}
              clicked={this.deletePersonHandler} />
          </div>
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          togglePerson={this.togglePersonHandler}
        />    
        {persons}
            
      </div>
    );
  } 
}

export default App;