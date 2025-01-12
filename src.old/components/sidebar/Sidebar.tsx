import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="aside">
            <ul>
            <li><Link to="/">Users</Link></li>
            <li><Link to="/">Coupons</Link></li>
            <li><Link to="/">Compamies</Link></li>
            <li><Link to="/">Purchases</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
