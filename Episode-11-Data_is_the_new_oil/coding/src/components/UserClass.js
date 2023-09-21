import React, { Component } from "react";

export class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/chamarthivamsidev");
    const json = await data.json();
    // console.log("Component Did Mount Called");
    this.setState({ userInfo: json });

    // this.timer = setInterval(() => {
    //   console.log("Set Interval Started");
    // }, [1000]);
  }

  // componentDidUpdate() {
  //   console.log("Component Did Update Called");
  // }

  // componentWillUnmount() {
  //   console.log("Component Will Unmount Called");
  //   clearInterval(this.timer);
  //   console.log("Set Interval Cleared");
  // }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div>
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h4>Contact : 7042576522</h4>
        </div>
        <div>
          <img
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            src={avatar_url}
          />
        </div>
      </div>
    );
  }
}

export default UserClass;

/**
 * React Life Cycle -> Parent with 2 childrens
 
 * Parent Constructor
 
 * Parent Render
    - First Child Constructor
    - First Child Render

    - Second Child Constructor
    - Second Child Render

    - First Child ComponentDidMount
    - Second Child ComponentDidMount

 * Parent ComponentDidMount
 */
