import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutPut from './UserOutPut/UserOutPut';
import Validation from './Validation/Validation';
import ChartList from './Char/Char';
// import Radium ,{StyleRoot }from 'radium';

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
  
  switchNameHandler = (newName) => {
    // console.log("was clicked!");
    this.setState({
      persons:[
        {id:"1",name:newName,age:"20"},
        {id:"2",name:"Mbumba Heritier",age:"18"},
        {id:"3",name:"Chenami",age:"22"}
      ]
    })
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
  
  onChangedUserInput = (event) => {
    this.setState({
      username:event.target.value
    })
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
  
  onUserInputChangedHandler = (event) => {
    this.setState({username:event.target.value});
  }
  
  deleteCharItem = (index) => {
    const text = this.state.username.split(''); //convert username string into an array of characters with split() javascript function
    text.splice(index, 1); //remove by index into the array
    
    const textUpdate = text.join(''); //join the text array with an empty array 
    this.setState({username:textUpdate});
    
  }
  
  render() {
    let btnClass = '';
    let persons = null;
    if (this.state.showPerson) {
      persons = (
          <div>
            {this.state.persons.map((person, index) =>{
              return <Person 
                        name={person.name} 
                        age={person.age}
                        changed={(event) => this.onChangedHandler(event,person.id)}
                        click={() => this.deletePersonHandler(index)}
                        // click={this.switchNameHandler.bind(this,'Rukiya')}
                        key={person.id}
                      >
                        My hobbies : Racing
                      </Person>
            })}
          </div>
        
      );
      btnClass = classes.Red;
    }
    
    let charList = this.state.username.split('').map((char,index) => {
      return <ChartList 
        charInput={char} 
        key={index}
        clicked ={() => this.deleteCharItem(index)}
        />
    })
    
    // const classes = ['red','bold'].join(' '); 
    const assignClasses = [];
    if(this.state.persons.length <= 2){
      assignClasses.push(classes.red); //classes['red']
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold); //classes['red','bold']
    }
    return (
      // <StyleRoot>
          <div className={classes.App}>
          <h1>Hi, I am react Developer!</h1>
          {/* <p className={classes}>Its really working guys</p> */}
          <p className={assignClasses.join(' ')}>Its really working guys</p>
          <button onClick={this.togglePersonHandler} className={btnClass}>Toggle Person</button>
          
          {persons}
          
          <div>
            <h2>Chart List</h2>
            <UserInput changed={this.onUserInputChangedHandler} username={this.state.username}/>
            <p>{this.state.username}</p>
            <Validation userInputLength={this.state.username.length} />
            {charList}
          </div>
            
          <div>
            <h2>Pratice's time</h2>
            <UserInput changed={this.onChangedUserInput} username={this.state.username}/>
            <UserOutPut name={this.state.username} />
            <UserOutPut name={this.state.username} />
            <UserOutPut name="Chenani"/>
          </div>
        </div>
      // </StyleRoot>
      
   
    );
    // return  React.createElement('div',{className:'App'}, React.createElement('h1', null,'Hi I am waiting for you'));
  }
  
}

export default App;
// export default Radium(App);