# Topics

## Redux Toolkit

- [Redux Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- Steps to be follow while creating store

  - `npm install @reduxjs/toolkit` -> To install redux toolkit
  - `npm install react-redux` -> To install react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector

- Updating a value in the store

  - Dispatch an action
  - It will call a Fn() (reducer)
  - That function will update the value in the store

- `useSelector` -> Used to read data from the store (Subscribing to the store)
- `useDispatch` -> Used to dispatch and update the value in the store

- If we want to print the state in reducer of storeSlice then we need to import a function current from `@reduxjs/toolkit`
  - console.log(current(state))
  - Otherwise it will print the proxy object in the console.
