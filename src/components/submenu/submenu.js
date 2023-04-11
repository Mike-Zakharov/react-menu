import React from "react";
import './submenu.sass';
import { useParams } from "react-router-dom";
import SubmenuHeader from "../submenu-header";
import SubmenuItem from "../submenu-item/submenu-item";


export const submenuData = [
    {itemId: 'services',
     header: 'Services',
     itemsContent:['Cloud Computing','Dedicated Servers','Platform Services','Information Security'],
    },
    {itemId: 'managed-it',
     header: 'Managed IT',
     itemsContent:['Managed IT','Managed IT','Managed IT','Managed IT'],
    },
    {itemId: 'telecom-solutions',
     header: 'Telecom Solutions',
     itemsContent:['Telecom Solutions','Telecom Solutions','Telecom Solutions','Telecom Solutions'],
    },
    {itemId: 'about-us',
     header: 'About Us',
     itemsContent:['Contacts','Partners','Reviews'],
    }
]


let key = 100;

const Submenu = () => {
    const {category} = useParams();
    

    //Находим необходимый нам обьект 
    const item = submenuData.find(x => x.itemId === category);
    
    const { header, itemsContent } = item;

    const content = itemsContent.map((item) => {
        return (
            <SubmenuItem item={item} key={key++}/>        
        )
    });

    return (
        <div>
            <SubmenuHeader header={header}/>
            <div className="divider"></div>
            <div className="submenu-wrapper">
                {content}
            </div>
            
        </div>
    )
               
};

export default Submenu;