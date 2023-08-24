import React from "react";
import './dropdown.sass'
import down from './icon_16x16_M_Arrow-bottom.svg';
import DropdownMenu from "../dropdown-menu";
import ru from '../icons/Icon_RU.svg';
import us from '../icons/Icon_US.svg';
import nl from '../icons/Icon_NL.svg';
import by from '../icons/Icon_BY.svg';
import kz from '../icons/Icon_KZ.svg';
import tr from '../icons/Icon_TR.svg';
import { useDispatch, useSelector } from "react-redux";
import { toggleDropdown } from "../../store/actions";



const Dropdown = () => {
    const dropdown = useSelector(state => state.dropdown);
    const lang = useSelector(state => state.lang);
    const dispatch = useDispatch();
    const userClickDropdown = () => {         
        dispatch(toggleDropdown());      
    }


    let currentFlag = us;
    switch(lang){            // получаем флаг для выбранного языка
        case 'NL':
            currentFlag = nl;
            break;  
        case 'BY':
            currentFlag = by;
            break;
        case 'RU':
            currentFlag = ru;
            break;
        case 'KZ':
            currentFlag = kz;
            break;
        case 'TR':
            currentFlag = tr;
            break;
        default:
            currentFlag = us;
    }   
    
    const toggleDD = dropdown ? <DropdownMenu /> : null; // логика отображения DropdownMenu

    const DDHeader = () => {
        return (
            <div className="dropdown"
            onClick={userClickDropdown}>
                <img src={currentFlag} alt={lang} className="flag"/>
                <span className="title">{lang}</span>
                <img src={down} alt='down'/>
            </div>
        )
    }

    return (
        <>
            <DDHeader/>
        
            {toggleDD}
        </>
    )
    
};

export default Dropdown;