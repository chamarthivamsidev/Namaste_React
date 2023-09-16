# Assignment-8

## Theory

- How do you create Nested Routes in react-router-dom configuration.

- React about createHashRouter, createMemoryRouter from React Router .

- What is the order of life cycle method calls in Class Based Components.

- Why do we use componentDidMount?

- Why do we use componentWillUnmount? Show me with example

- (Research) Why do we use super(props) in constructor?

- (Research) Why can't we have the callback function of useEffect async?
  - React’s `useEffect` hook expects a cleanup function returned from its callback which is called when the component unmounts
  - here will cause a bug because when `async` callback function of the `useEffect` is called, Promise is returned instead of function. But the rule is that we should either return clean up function or nothing from the callback given to the useEffect,but async function by its property always return Promise which violates this rule

## Coding

- Create a Class Based Component

  - Create 2 class based child components
  - Pass props from parent to child
  - Create a constructor
  - Create a state variable inside child
  - Use this.setState to update it
  - What if there are multiple state variables?
  - Write a console.log for each lifecycle method
  - Play with the console.logs to find out the correct order of their execution

- Create interval inside componentDidMount?
  - Use clearInterval to fix the issue caused by that interval
