import React from "react";
import './start-page.sass';
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




const StartPage = () => {
    return (    
        <section className="start-page">
            <h1 className="start-page__title">IT<span>GLOBAL</span>.COM</h1>
            <h2 className="start-page__subtitle">MANAGED IT. WORLDWIDE</h2>
            <Hamburger />
            
            
        </section>    
    )
}

export default StartPage;