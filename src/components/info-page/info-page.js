import React from "react";
import './info-page.sass'
import SubmenuHeader from "../submenu-header";
import InfoPageItem from "../info-page-item";
import { submenuData } from "../submenu/submenu";
import { useParams } from "react-router-dom";



// Делаю БД сразу тут что бы было проще

const infoPageItemsData = [
    {title: 'Cloud consulting',
    descr: 'Relational database services for MySQL, PostgreSQL, and SQL server.' },
    {title: 'Cloud infrastructure analytics',
    descr: 'Health-specific solutions to enhance the patient experience.'},
    {title: 'Hybrid Cloud',
    descr: 'Data storage, AI, and analytics solutions for government agencies.'},
    {title: 'Multicloud',
    descr: 'Relational database services for MySQL, PostgreSQL, and SQL server.'}
]



// дублируем, потому что нужен скролл
const DoubleData = [...infoPageItemsData, ...infoPageItemsData];

let key = 100

const Items = DoubleData.map((item) => {    
    return <InfoPageItem title={item.title} descr={item.descr} key={key++}/>
});


const InfoPage = () => {

    const { id, category} = useParams();
    const item = submenuData.find(x => x.itemId === category);
    
    const { itemsContent } = item;

    const header = itemsContent.map((item) => {
        if(item.replace(' ', '-').toLowerCase() === id) {
            return item
        }
    });

    return(
        <div>
            <SubmenuHeader header = {header}/>
            <div className="divider"></div>
            <div className="info-page-items_wrapper">
                {Items}
            </div>
        </div>
    )
}


export default InfoPage;