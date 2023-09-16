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
