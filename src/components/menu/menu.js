import React from 'react';
import { Link } from 'react-router-dom';
import MainMenuItem from '../main-menu-item';


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
            <Link to="#" className="info__link title"><span>Contacts</span></Link>
            <Link to="#" className="info__link title"><span>Search</span></Link>
        </div>
    </div>
  )
}

export default Menu;