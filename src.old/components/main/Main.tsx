import React from "react";
import Home from "../home/Home";
import Header from "../header/Header";  // Import the Heder component
import Login from "../login/Login";
import { Routes, Route } from "react-router-dom";  // Import Routes and Route
import SignUp from "../signUp/SignUp";
import About from "../about/About";
import "./Main.css";

function Main() {
    return (
        <div className="Main">

            <Header />  {/* Include the header here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} /> 
            </Routes>
        </div>
    );
}

export default Main;
