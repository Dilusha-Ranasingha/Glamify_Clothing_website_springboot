import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as BrouwserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import MensPage from './pages/MensPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import MyAccountPage from './pages/myAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrouwserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/men" element={<MensPage />} />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/account' element={<MyAccountPage />} />
    </Routes>
  </BrouwserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
