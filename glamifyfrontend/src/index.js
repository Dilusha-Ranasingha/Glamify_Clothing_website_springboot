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
import { UserProvider } from './context/UserContext';
import AddToCartPage from './pages/addToCartPage';
import UpdatePage from './pages/UpdatePage';
import FootwearPage from './pages/FootwearPage';
import AccessoriesPage from './pages/AccessoriesPage';
import AdminPage from './pages/AdminPages/AdminPage';
import AdminPageMen from './pages/AdminPages/AdminPageMen';
import AdminPageWomen from './pages/AdminPages/AdminPageWomen';
import AdminPageKids from './pages/AdminPages/AdminPageKids';
import AdminPageFootwear from './pages/AdminPages/AdminFootwear';
import AdminHomePage from './pages/AdminPages/AdminHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrouwserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MensPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/account' element={<MyAccountPage />} />
        <Route path='/cart' element={<AddToCartPage />} />
        <Route path='/update' element={<UpdatePage />} />
        <Route path='/accessories' elemtnt={<AccessoriesPage />} />
        <Route path='/footwear' element={<FootwearPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/adminmen' element={<AdminPageMen />} />
        <Route path='/adminwomen' element={<AdminPageWomen />} />
        <Route path='/adminkids' element={<AdminPageKids />} />
        <Route path='/adminfootwear' element={<AdminPageFootwear />} />
        <Route path='/adminhome' element={<AdminHomePage />} />
      </Routes>
    </BrouwserRouter>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
