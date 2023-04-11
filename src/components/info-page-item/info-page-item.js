import React from "react";
import './info-page-item.sass'


const InfoPageItem = ({title,descr}) => {
    return (
        <div className="info-page-item">
            <h4 className="info-page-item__title">{title}</h4>
            <div className="info-page-item__descr">{descr}</div>
        </div>
    );
};

export default InfoPageItem;