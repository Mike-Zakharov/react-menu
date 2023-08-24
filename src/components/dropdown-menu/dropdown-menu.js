import React from "react";
import './dropdown-menu.sass'
import DropdownItem from "../dropdown-item/dropdown-item";
import {dropdownData} from '../database/database';
import { changeLang } from "../../store/actions";
import { useDispatch } from 'react-redux';





const DropdownMenu = () => {
    const dispatch = useDispatch();
    const userChangesLang = (value) => {
        dispatch(changeLang(value)); // диспатчим язык на который кликнули
    }

    const ddItem = dropdownData.map((item) => {

        return (
            <DropdownItem
            key={item.value}
            src={item.img}
            alt={item.value}
            title={item.title}
            userChangesLang={ () => userChangesLang(item.value) }/>
        )
    })


    return(
        <div className="dropdown__menu">
            <h5>Language</h5>
            {ddItem}
        </div>
    )     
};

export default DropdownMenu;