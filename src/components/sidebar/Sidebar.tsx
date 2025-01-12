import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

    const navigate = useNavigate(); // Initialize navigate
    const isUserLoggedIn = localStorage.getItem('token') !== null;

    // if (!isUserLoggedIn) {
    //     return null;
    //   }

    return (
        <div className="sidebar">
        <ul className="sidebar-links">
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/coupons">Coupons</Link></li>
            <li><Link to="/companies">Compamies</Link></li>
            <li><Link to="/purchases">Purchases</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
