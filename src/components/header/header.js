import React from "react";
import './header.sass'
import { Link } from "react-router-dom";
import Dropdown from "../dpopdown";
import close from './icon_16x16_M_Close.svg';


const Header = () => {
    return(
        <header className="header">
            <Dropdown/>
            <div>
                <Link to='/'><img src={close} alt='close'/></Link>
            </div>
        </header>
    )
};

export default Header;