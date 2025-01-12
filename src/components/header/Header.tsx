import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import './Header.css';

function Header() {
  const navigate = useNavigate(); // Initialize navigate
  
  function logOut() {
    localStorage.removeItem('token'); // Deleting token from local storage
    navigate('/'); // Navigate to main page
  }

  // checks if there is a token (logged in user)
  const isUserLoggedIn = localStorage.getItem('token') !== null;

  return (
    <div className="header">
      <nav className="header">
        { <div className="header-logo">COUPON</div> }
        <ul className="header-links">
          <li><Link to="/">Home</Link></li>
          {/* Show Login button if the user didn't login*/}
          {!isUserLoggedIn && (
            <>
              <li><Link to="/login">Login</Link></li>       
            </>
          )}

          {/* Show Logout button if the user is logged in the system*/}
          {isUserLoggedIn && (
            <li><Link to="/" onClick={logOut}>LogOut</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
