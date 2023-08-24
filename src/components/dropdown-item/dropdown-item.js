import React from "react";
import './dropdown-item.sass';

const DropdownItem = ({value,src,title,userChangesLang}) => {

    return (
        <div key={value} id={value} className="dropdown__item" onClick = {userChangesLang}>
            <img src ={src} alt={value}/>
            <h5>{title}</h5>
        </div>
    )

}

export default DropdownItem;