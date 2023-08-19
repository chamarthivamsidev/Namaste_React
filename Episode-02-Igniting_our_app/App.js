import React from "react";
import ReactDOM from "react-dom/client";
/**
 *
 * <div id='parent'>
 *      <div id='child'>
 *             <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 *
 *
 *
 *
 */

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'am h1 tag"),
    React.createElement("h2", {}, "I'am h2 tag"),
    React.createElement("h3", {}, "I'am h3 tag"),
  ])
);

console.log("heading :>> ", heading); // return object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
