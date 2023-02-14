import React from "react";
import './promo.sass';
import hamburger from './hamburger.svg'
import { Link } from 'react-router-dom';


const Hamburger = () => {
    return (
        <div className="hamburger">
            <Link to='/main-menu'>
                <img src = {hamburger} alt='menu'/>
            </Link>
        </div>
        
    )
};




const Promo = () => {
    return (    
        <section className="promo">
            <h1 className="promo__title">IT<span>GLOBAL</span>.COM</h1>
            <h2 className="promo__subtitle">MANAGED IT. WORLDWIDE</h2>
            <Hamburger />
            
            
        </section>    
    )
}

export default Promo;