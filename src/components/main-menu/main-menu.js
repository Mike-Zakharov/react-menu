import React from "react";
import './main-menu.sass';
import {  Outlet } from "react-router-dom";
import Header from "../header";





const MainMenu = () => {

    return (
        <section>
            <Header/>
            <Outlet />   
        </section>
    )
};

export default MainMenu;
