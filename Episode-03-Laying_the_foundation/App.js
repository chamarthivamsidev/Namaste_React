import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(when render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React by Akshay Saini"
);

// JSX => is not HTML in javascript => It is HTML like syntax
// JSX => Transpiled before it reaches the JS engine -> Parcel -> Babel
// JSX => React.createElement => Js Object => HTMLElement(when render)

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
