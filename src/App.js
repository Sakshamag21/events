import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import CardsLandingPage from './Components/cardLandingPage/cardLandingPage';
import Cards from './Components/cards/cards';
import Header from './Components/header/header';
import Navbar from './Components/navbar/navbar';


function App() {
  return (

      <Routes>
        <Route path={`/cardsLanding`} element={<CardsLandingPage />} />
        <Route path={`/cards`} element={<Cards />} />
        <Route path={`/header`} element={<Header />} />
        <Route path={`/navbar`} element={<Navbar />} />
      </Routes>
  );
}

export default App;