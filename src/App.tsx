import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from './component/HomePage/HomePage';
import RestaurantsPage from './component/RestaurantsPage/RestaurantsPage';
import ChefsPage from './component/ChefsPage/ChefsPage';
import OneRestPage from '../src/component/OneRestPage/OneRestPage';
import SignInPage from './component/SignInPage/SignInPage';
import SignUpPage from './component/SignUpPage/SignUpPage';


const App: React.FC = ()=> {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RestaurantsPage" element={<RestaurantsPage />} />
      <Route path="/ChefsPage" element={<ChefsPage />} />
      <Route path="RestaurantsPage/:id" element={<OneRestPage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
