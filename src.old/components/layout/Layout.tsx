import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css";

function Layout(){
    return(
        <div className="layout">
            {/* <header>
                <Header/>
            </header> */}

            <aside>
                <Sidebar/>
            </aside>

            <main>
                <Main/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Layout;