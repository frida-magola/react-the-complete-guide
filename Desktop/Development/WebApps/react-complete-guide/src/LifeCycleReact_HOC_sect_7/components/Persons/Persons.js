import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props){
    super(props);
    this.lastInputfocused = React.createRef();
  }
  // static getDerivedStateFromProps(props,state){
  //   console.log('[Persons.js] getDerivedStateFromProps',props)
  //   return state;
  // }
  
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Persons.js] shouldComponentUpdate',nextProps);
  //   if (nextProps.Persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   }else{
  //     return false;
  //   }
    
  // }
  
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapShotBeforeUpdate');
    return {message:"Snapshot..."};
  }
  
  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
    
  }
  
  componentDidMount(){
    this.lastInputfocused.current.focus();
  }
  
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }
  
  render() {
    console.log('[Persons.js] renderering ...');
    return this.props.persons.map((person, index) =>{
    
      return <Person 
                position={index}
                ref={this.lastInputfocused}
                name={person.name} 
                age={person.age}
                // authenticated={this.props.isAuthenticated}
                changed={(event) => this.props.changed(event,person.id)}
                click={() => this.props.clicked(index)}
                // click={this.switchNameHandler.bind(this,'Rukiya')}
                key={person.id}
                
              >
                My hobbies : Racing
              </Person>
    });
  }
  
}
export default Persons;