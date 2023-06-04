import React, { Component, ErrorInfo, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useAppSelector } from './app/hooks';
import LoginPage from './Pages/LoginPage';
import MissingPage from './Pages/MissingPage';
import DashboardPage from './Pages/DashboardPage';
import LayoutPage from './Pages/LayoutPage';
import darkTheme from './Components/CssFolder/DarkThemeCss';
import lightTheme from './Components/CssFolder/LightTheme';
import AuthController from './Authorization/AuthController';
import UnAuthorizedPage from './Pages/UnAuthorizedPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import PaymentPage from './Pages/PaymentPage';
import OrderPage from './Pages/OrderPage';
import BasketPage from './Pages/BasketPage';
import ErrorPage from "./Pages/ErrorPage";
import ErrorCatchComponent from "./Components/UiComponents/ErrorCatchComponent";
import CoursePage from "./Pages/Course/CoursePage";


function App() {
  const ThemeSlice = useAppSelector(state => state.ThemeSlice);

  function themeSelector() {
    return ThemeSlice.currentTheme === "dark" ? darkTheme : lightTheme;
  }

  return (
    <ThemeProvider theme={themeSelector}>
      <BrowserRouter>
        <ErrorCatchComponent>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/LoginPage' element={<LoginPage />} />
            <Route path='/ErrorPage' element={<ErrorPage />} />
            <Route path='/DashboardPage' element={<AuthController component={<DashboardPage />} />} />
            <Route path='/CatalogPage' element={<AuthController component={<CoursePage afterSelection={() => { }} />} />} />
            <Route path='/BasketPage' element={<AuthController component={<BasketPage />} />} />
            <Route path='/OrderPage' element={<AuthController component={<OrderPage />} />} />
            <Route path='/PaymentPage' element={<AuthController component={<PaymentPage />} />} />
            <Route path='/ProductDetailPage' element={<AuthController component={<ProductDetailPage />} />} />
            <Route path='/UnAuthorizedPage' element={<AuthController component={<UnAuthorizedPage />} />} />
            <Route path='*' element={<LayoutPage children={<MissingPage />} />} />
          </Routes>
        </ErrorCatchComponent>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
