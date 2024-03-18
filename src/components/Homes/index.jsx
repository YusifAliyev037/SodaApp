import React from 'react';
import style from "../Homes/style.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Soda from '../Soda';
import Chips from '../Chips';
import Sardines from '../Sardines';
import NotFound from '../404';
import machine from '../../assets/image/VendingMachine.png';

function Home() {
  return (
    <BrowserRouter>
      <div className={style.body} style={{backgroundImage: `url(${machine})`}}>
        <h1 className={style.h1}>Hello i am a vending machine. what would you like to eat?</h1>
        <Routes>
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/sardines' element={<Sardines />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Home;
