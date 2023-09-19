import React from 'react';
import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import ImdbContext from './ImdbContext';
import TopInfo from './components/TopInfo';

function div() {
  return (
    <div className='main-layout'>
      <ImdbContext.Provider>
        <TopInfo />
        <Nav />
        <Outlet />
      </ImdbContext.Provider>
    </div>
  )
}

export default div