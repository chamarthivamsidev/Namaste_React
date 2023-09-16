import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <p className="logo-name">Akali</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="menu_link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu_link">
              About Us
            </Link>
          </li>
          <li>
            <li>
              <Link to="/contact" className="menu_link">
                Contact Us
              </Link>
            </li>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
