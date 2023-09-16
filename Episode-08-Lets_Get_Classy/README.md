# Topics -

## Class Based Components

- constructor
- super
- this.props
- this.state
- this.setState -> used to update the state. (we have to pass the state which is to be updated and it won't effect other state values.)
  - `this.state = {name : "pablo", age : "25"}`
  - `this.setState({name : "pandey"})` -> it will update the name only and age is same as it before.
- componentDidMount()

## [React Life Cycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- Two phases in life react life cycle

  - Render Phase
  - Commit Phase
    <br/> <br/>

- Mounting

  - Render Phase
    - constructor
    - render
  - Commit Phase
    - React updates the dom
    - componentDidMount will be called

- Updating

  - Render Phase
    - render
  - Commit Phase
    - React updates the dom
    - componentDidUpdate will be called

- Unmounting
  - Commit Phase
    - componentWillUnmount will be called

## Github User API

- [Main Doc](https://docs.github.com/en/rest/users?apiVersion=2022-11-28)
- [Get a user](https://docs.github.com/en/free-pro-team@latest/rest/users/users?apiVersion=2022-11-28#get-a-user)
  - https://api.github.com/users/`${USER_NAME}` => to get the specific user info
