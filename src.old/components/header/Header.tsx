import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import './Header.css';

function Header() {
  const navigate = useNavigate(); // Initialize navigate

  // פונקציה ליציאה מהמערכת
  function logOut() {
    localStorage.removeItem('token'); // מחיקת הטוקן מה-localStorage
    alert("Bye Bye!"); // הצגת הודעה
    navigate('/'); // פנייה לעמוד login לאחר יציאה
  }

  // בדוק אם יש טוקן ב-localStorage
  const isUserLoggedIn = localStorage.getItem('token') !== null;

  return (
    <div className="header">
      <nav className="header">
        {/* <div className="header-logo">CouponMaster</div> */}
        <ul className="header-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* הצגת Login ו-SignUp רק אם המשתמש לא מחובר */}
          {!isUserLoggedIn && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
            </>
          )}

          {/* הצגת LogOut אם המשתמש מחובר */}
          {isUserLoggedIn && (
            <li><Link to="/" onClick={logOut}>LogOut</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
