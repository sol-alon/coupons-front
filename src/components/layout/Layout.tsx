import { Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css"
import React, { useState } from "react";
import Login from "../login/Login";
import UsersTable from "../user/usersTable";
import { IUser } from "../user/user";
import UsersTableContainer from "../user/usersTableContainer";

function Layout(){
    return(
    <div className="layout">
        <header>
            <Header />
        </header>
        <aside>
            <Sidebar />
        </aside>
        <main>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />}/>
            <Route path="/users" element={<UsersTableContainer />} />

            </Routes>
        </main>
        <footer>Footer</footer>
    </div>
    )
}

export default Layout;