import React, { useState } from "react";

function User({ name }) {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>count = {count}</h2>
      <h2>count2 = {count2}</h2>
      <h2>Name : {name}</h2>
      <h3>Location : Bengaluru</h3>
      <h3>Contact : 7042576522</h3>
    </div>
  );
}

export default User;
