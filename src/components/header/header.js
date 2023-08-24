import React from "react";
import './header.sass'
import { Link } from "react-router-dom";
import Dropdown from "../dpopdown";
import close from './icon_16x16_M_Close.svg';
import { useDispatch } from "react-redux";
import { toggleDropdown } from "../../store/actions";


const Header = () => {
    const dispatch = useDispatch();
    const userClickClose = () => {        // реализуем закрытие дропдауна при нажатии на крестик 
        dispatch(toggleDropdown());      
    }
    return(
        <header className="header">
            <Dropdown/>
            <div onClick={userClickClose}>    
                <Link to='/'><img src={close} alt='close'/></Link>
            </div>    
        </header>
    )
};

export default Header;