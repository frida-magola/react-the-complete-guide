import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }
    state = {
       ingredients:{
           salad:0,
           bacon:0,
           cheese:0,
           meat:0
       } //is an object
    }
    
    addIngredientsHandler = (type) => {
        
    }
    
    removeIngredient
    
    render () {
       return (
          <Aux>
              {/* burger ingredients */}
              <Burger ingredients={this.state.ingredients}/>
              {/* <div>Burger Controls</div> */}
              <BuildControls />
          </Aux> 
       );
    }
}

export default BurgerBuilder