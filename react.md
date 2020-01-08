# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications *true
- React will only render on the server using Node.js *false
- React is a full stack framework for modern web applications *false 
-   react is a front end framework for modern web aplications.
- React is a flexible library that plays the role of V in an MVC framework *false
- You should always update a component's state directly using this.state *false
-   you use set state not this.state
- React is made up of encapsulated components that manage their own state *true
- React components render HTML *true


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: smart components manage state and dumb ones do not.

  Researched answer: Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going
  Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: Its dowloading yarn and  making it possible for us to see it rendered. I think the react file will be automatically updated

  Researched answer: yarn add : adds a package to use in your current package.



4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: props get passed to the component and state is controlled within the component

  Researched answer: In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.



5. How would you explain state to a friend who doesn't know code?

  Your answer: state is a way to change to change the behavior of a component depending on its current state.
