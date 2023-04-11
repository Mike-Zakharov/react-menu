import React from "react";
import { useNavigate } from "react-router-dom";
import left from './icon_16x16_M_Arrow-left.svg';
import './submenu-header.sass';


const SubmenuHeader = ({header}) => {

    const navigate = useNavigate();  // настраиваем возвращение в main-menu для каждого элемента
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="submenu-header_wrapper">
            <div className="submenu-header"
                onClick={ goBack }>
                <img src={left} alt='left'/>
                <span className="title">{header}</span>
            </div>
        </div>
    )
}


export default SubmenuHeader;