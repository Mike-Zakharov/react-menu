import React from "react";
import './main-menu.sass';
import MainMenuItem from '../main-menu-item';
import { Link } from "react-router-dom";
import Header from "../header";


// Массив значений для меню
const mainMenuItemsData = [
    { id: 'services',
      value: 'Services' },
    { id: 'managed-it',
      value: 'Managed IT' },
    { id: 'telecom-solutions',
      value: 'Telecom Solutions' },  
    { id: 'about-us',
      value: 'About Us' },
    ];

    ;
const Items = mainMenuItemsData.map((item) => {
    return (
        <MainMenuItem 
        value={item.value}
        id={item.id}
        key={item.id}/>
    )
})


const Menu = () => {
    return (
        <div>
            <div className="main-menu__items">
                { Items }
            </div>  
            <div className="main-menu__info">
                <Link to="#" className="info__link title"><span>Контакты</span></Link>
                <Link to="#" className="info__link title"><span>Поиск</span></Link>
            </div>
        </div>
    )
}

const MainMenu = () => {
    return (
        <section>
            <Header />
            <Menu/>    
        </section>
    )
};

export default MainMenu;
