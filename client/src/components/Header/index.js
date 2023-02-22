import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/studdy-buddy-logo.jpeg";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <img
        className="study-buddy-logo"
        src={logo}
        alt="study-buddy-logo"
        width="100%"
      />
      
  
      <nav id="navbar">
        
          {Auth.loggedIn() ? (
            <>
              <Link className=" navitem btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button
                className="navitem btn btn-lg btn-light m-2 "
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className=" btn btn-lg btn-info mr-5 " to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light mr-5  " to="/signup">
                Signup
              </Link>
            </>
          )}
        
      </nav>
  
    </header>
  );
};

export default Header;
