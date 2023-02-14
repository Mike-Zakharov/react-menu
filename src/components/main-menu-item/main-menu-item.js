import React from "react";
import './main-menu-item.sass';
import arrow from './icon_16x16_M_Arrow-right.svg';
import { Link } from "react-router-dom";




const MainMenuItem = ({ id, value }) => {
    return (
        <Link to={id} className="menu__item">            
            <span className="title">{value}</span>
            <img src={arrow} alt='right'></img>
        </Link>
    )
};

export default MainMenuItem;