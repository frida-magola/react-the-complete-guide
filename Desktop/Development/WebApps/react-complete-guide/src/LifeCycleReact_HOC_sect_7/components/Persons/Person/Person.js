import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';
// import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    
    componentDidMount(){
        if (this.props.position === 0) {
            // this.inputElement.focus(); //1rst way to use reference
            this.inputElement.current.focus(); //2nd way to use  reference
        }
    }
    
    //this function is called out of this component or class i.e in Persons.js file
    focus(){
        this.inputElement.current.focus(); 
    }
    
    render() {
       console.log('[Person.js] renderering ...')
        return(
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I am authenticated !</p> : null}
                </AuthContext.Consumer>
                
                <p onClick ={this.props.click} > Hi!I 'm a {this.props.name} and I am {this.props.age} years old</p> 
                <p> {this.props.children} </p> 
                <input 
                    // ref={(inp) => this.inputElement = inp} //1rst way to use reference
                    ref={this.inputElement} // 2nd way for using reference with initalizing  this.inputElement into the constructor with createRef() introduce in react 16.3
                    type = "text"  
                    onChange = {this.props.changed} 
                    value = {this.props.name} /> 
            </Aux>
        );
    }  
}
// Person.PropTypes = {
//     click: PropTypes.func,
//     name: PropTypes.string,
//     age: PropTypes.number,
//     changed: PropTypes.func
     
// }
// export default Person;

export default withClass(Person,classes.Person);