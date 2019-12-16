// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.
import React, { Component } from 'react'

class PrintThis extends Component {
  render() {
    return (
      <div>
        <p>I am component</p>
      </div>
    )
  }
}

export default PrintThis




// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}
var wordLength = names.map(value =>
 `${value} is ${value.length} characters long.`)

console.log(wordLength)



// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}


const {name, home, dislikes} = this.state




// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}
 render() {
    return this.state.count + 1
  }
  
  
  //or??
  
  UpdateCount = () => {
    this.setState({ count: this.state.count + 1 });
  }



5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes extends component{
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        name: 'Meatballs',
        name: 'Mac & Cheese'
        ]
    }
  }

  render() {
    return(
      let recipe = recipes.map(recipe => {
        return(
          <li> key={recipes.name}>{recipes.name}</li>
        )
      })
      <ul>
        {recipes}
      </ul>
    )
  }
}
export default Recipes
