import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between  bg-pink-50 sticky top-0">
      <div className="flex items-center">
        <img className="w-24 h-24" src={LOGO_URL} />
        <p className="logo-name">Akali</p>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" className="ml-4">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="ml-4">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="ml-4">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="ml-4">
              Grocery
            </Link>
          </li>
          {/* <li>Cart</li> */}
          <button
            className="login-btn ml-4"
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
