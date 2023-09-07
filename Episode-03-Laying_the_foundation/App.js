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

// React Functional Component

const Title = () => {
  return <h1>Title Component</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <h1>Namaste React Functional Component</h1>
      <Title />
    </>
  );
};

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        // border: "1px solid red",
        borderRadius: "15px",
        // height: "100vh",
        height: "80px",
        margin: 0,
        padding: 0,
        alignItems: "center",
        backgroundColor: "#4a8ad0",
        marginTop: "20px",
      }}
    >
      <div style={{ flex: 1, textAlign: "center" }} title="Logo">
        <img
          width="50px"
          height="50px"
          src="https://seeklogo.com/images/A/as-roma-logo-61DF23CC37-seeklogo.com.png"
        />
      </div>
      <div
        style={{ flex: 2, position: "relative", display: "flex" }}
        title="Search box"
      >
        <input
          type="text"
          placeholder="Type anything here......."
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "20px",
            paddingLeft: "14px",
          }}
        />
        <div style={{ position: "absolute", right: 10, top: 6 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            width="30px"
            height="30px"
          />
        </div>
      </div>
      <div style={{ flex: 1, textAlign: "center" }} title="User">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          width="40px"
          height="40px"
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
