import React from "react";
import './submenu-item.sass'
import { Link } from "react-router-dom";
import right from './icon_16x16_M_Arrow-right.svg';


let itemKey = 100;

const SubmenuItem = ({item}) => {

    const id = item.replace(' ', '-').toLowerCase();

    return (
        <Link to={id} className="submenu-item" key={itemKey++}>
            <span>{item}</span> 
            <img src={right} alt='right' className="submenu-item-arrow"/>
        </Link>
    )
}

export default SubmenuItem;