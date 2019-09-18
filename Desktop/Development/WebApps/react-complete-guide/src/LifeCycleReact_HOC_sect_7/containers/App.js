import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';

export const AuthContext = React.createContext(false)

//App.js is a class based-component
class App extends Component{
  // NB: when a component is created the constructor is executed is default ES6 class feature
  //the constructor receive some props.
  constructor(props) {
    super(props);
    console.log('[App.js] constructor!');
    
    //All state initialisation
    this.state ={
      persons:[
        {id:"1nyira",name:"nyira",age:"30"},
        {id:"2Mbumba",name:"Mbumba",age:"28"},
        {id:"3Chenami",name:"Chenami",age:"2"}
      ],
      username: "",
      showPerson: false,
      showCockpit: true,
      // changeCounter:0,
      toggleClicked:0,
      authenticated:false,
    }
  }
  
  //static method 
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
  
  componentDidMount(){
    console.log('[App.js] componentDidMount ');
  }
  
  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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
    
    this.setState({
      persons:persons, 
      // changeCounter:this.state.changeCounter + 1
    });
  }
  
  togglePersonHandler = () => {
    const showPerson = this.state.showPerson;
    this.setState((prevState,props) =>{
      return {
        showPerson:!showPerson, 
        toggleClicked:prevState.toggleClicked + 1}
    });
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
  
  loginHandler = () => {
    this.setState({authenticated:true});
  }
  
  render() {
    console.log('[App.js] render...')
    let persons = null;
    if (this.state.showPerson) {
      persons =
          <div>
            <Persons 
              persons={this.state.persons} 
              changed={this.onChangedHandler}
              clicked={this.deletePersonHandler}
              // isAuthenticated={this.state.authenticated} 
            />
          </div>
    }

    return (
      <Aux>
          <button onClick={() => this.setState({showCockpit:false})}>Remove Cockpit</button>
          {this.state.showCockpit ?
            <Cockpit 
            title={this.props.appTitle}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            togglePerson={this.togglePersonHandler}
            login={this.loginHandler}
            /> : null
          } 
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>  
          
      </Aux>
    );
  } 
}

export default withClass(App,classes.App);