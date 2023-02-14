import React, {Component} from "react";
import './dropdown.sass'
import ru from './icons/Icon_RU.svg';
import us from './icons/Icon_US.svg';
import nl from './icons/Icon_NL.svg';
import by from './icons/Icon_BY.svg';
import kz from './icons/Icon_KZ.svg';
import tr from './icons/Icon_TR.svg';
import down from './icons/icon_16x16_M_Arrow-bottom.svg';

const dropdownData = [
    {value:'US',
     icon: us,
     key: 'US'},
    {value:'NL',
     icon: nl,
     key: 'NL'},
    {value:'BY',
     icon: by,
     key: 'BY'},
    {value:'RU',
     icon: ru,
     key: 'RU'},
    {value:'KZ',
     icon: kz,
     key: 'KZ'},
    {value:'TR',
     icon: tr,
     key: 'TR'},
];


export default class Dropdown extends Component {


    render() {
        return (
            <div className="dropdown">
                <img src={ru} alt='Russia' className="flag"/>
                <span className="title">RU</span>
                <img src={down} alt='down'/>
            </div>
        )
    }
};