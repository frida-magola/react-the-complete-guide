import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // 1st way for using this.
    
    // let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        
    //     return [...Array(props.ingredients[igKey])].map((_,i) => {
    //         return <BurgerIngredient key={igKey + i} type={igKey} />;
    //     })
    // })
    
     //reduce() // is a function it allow to transform the array in something else, it takes 2 functions previous valus  and the current values.
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
    }).reduce((arr,el) => {
        return arr.concat(el);
    }, [])
    // console.log(transformedIngredients);
    
   //check transformedIngredients array if the length is equal to zero
   if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
   }
    
    return (
       <div className={classes.Burger}>
           <BurgerIngredient type="bread-top" />
           {/* <BurgerIngredient type="cheese" />
           <BurgerIngredient type="meat" /> */}
           {transformedIngredients}
           <BurgerIngredient type="bread-bottom" />
       </div> 
    )
}

export default burger;