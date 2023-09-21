import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

import React, { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        {/* <User name={"Chamarthi Vamsi"} /> */}
        <div>
          Logged User :
          <UserContext.Consumer>
            {(data) => <span> {data.loggedUser}</span>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Chamarthi Vamsi"} location={"Bengaluru"} />
      </div>
    );
  }
}

export default About;
