import React from 'react';
import './App.sass';
import Promo from '../promo';
import {  Routes, Route } from 'react-router-dom';
import MainMenu from '../main-nemu'
import Services from '../services';
import ManagetIt from '../managed-it';
import TelecomSolutions from '../telecom-solutions';
import AboutUs from '../about-us';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Promo />} exact />
      <Route path = '/main-menu/*' element = {<MainMenu/>} exact />
      <Route path='/main-menu/services' element = {<Services />} />
      <Route path='/main-menu/managed-it' element = {<ManagetIt />} />
      <Route path='/main-menu/telecom-solutions' element = {<TelecomSolutions />} />
      <Route path='/main-menu/about-us' element = {<AboutUs />} />
    </Routes>
  );
}

export default App;
