import React from 'react';
import './App.sass';
import StartPage from '../start-page';
import {  Routes, Route } from 'react-router-dom';
import MainMenu from '../main-menu'
import Menu from '../menu'
import Submenu from '../submenu';
import InfoPage from '../info-page/info-page';





function App() {
  return (
    <Routes>
      <Route path='/*' element = {<StartPage />} />
      <Route path = 'main-menu' element = {<MainMenu/>} >
        <Route index element = {<Menu/>} />
        <Route path=':category' element = {<Submenu/>} />
        <Route path=':category/:id' element = {<InfoPage/>}/>  
      </Route>
    </Routes>
  );
}

export default App;
