import React from "react";
import './services.sass';
import Header from "../header";
import SubmenuItem from "../submenu-item";


// достаём id что бы по нему определять какие данные нужно рендерить
// const str = document.location.href.slice(document.location.href.search('main-menu/'));
// const str1 = str.slice(str.indexOf('/'));
// const itemId = str1.slice(1);


const Services = () => {

    return (
        <div>
            <Header/>
            <SubmenuItem/>
        </div>
    )
}

export default Services;