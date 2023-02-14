import React from "react";
import './submenu-item.sass';
import right from './icon_16x16_M_Arrow-right.svg';
import left from './icon_16x16_M_Arrow-left.svg';
import { Link } from "react-router-dom";


const submenuItemData = [
    {id: 'services',
     header: 'Services',
     itemsContent:['Облачные вычисления','Выделенные серверы','Платформенные сервисы',`Информационная безопасность`],
    },
    {id: 'managed-it',
     header: 'Managed IT',
     itemsContent:['Managed IT','Managed IT','Managed IT','Managed IT'],
    },
    {id: 'telecom-solutions',
     header: 'Telecom Solutions',
     itemsContent:['Telecom Solutions','Telecom Solutions','Telecom Solutions','Telecom Solutions'],
    },
    {id: 'about-us',
     header: 'About Us',
     itemsContent:['Контакты','Наши партнёры','Отзывы'],
    }
]


const SubmenuItem = () => {

    // достаём id что бы по нему определять какие данные нужно рендерить
    const str = document.location.href.slice(document.location.href.search('main-menu/'));
    const str1 = str.slice(str.indexOf('/'));
    const itemId = str1.slice(1);

    //Находим необходимый нам обьект 
    const item = submenuItemData.find(x => x.id === itemId);

    const { header, itemsContent } = item;

    let itemKey = 100;

    const content = itemsContent.map((item) => {
        return (
            <div key={itemKey++}>
                <span>{item}</span> 
                <img src={right} alt='right'/>   
            </div>
               
        )
    });
                    
    return (
        <div>
            <div>
                <img src={left} alt='left'/>
                <span>{header}</span>
            </div>
            <div className="divider"></div>
            {content}
        </div>
    )
            
    
    
    
   
};

export default SubmenuItem;