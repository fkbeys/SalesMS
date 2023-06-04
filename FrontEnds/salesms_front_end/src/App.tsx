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
import CatalogPage from './Pages/CatalogPage';
import UnAuthorizedPage from './Pages/UnAuthorizedPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import PaymentPage from './Pages/PaymentPage';
import OrderPage from './Pages/OrderPage';
import BasketPage from './Pages/BasketPage';
import ErrorPage from "./Pages/ErrorPage";
import ErrorCatchComponent from "./Components/UiComponents/ErrorCatchComponent";


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
            <Route path={'/'} element={<CatalogPage />} />
            <Route path={'/CatalogPage'} element={<CatalogPage />} />
            <Route path='/LoginPage' element={<LoginPage />} />
            <Route path='/ErrorPage' element={<ErrorPage />} />
            <Route path='/DashboardPage' element={<AuthController component={<DashboardPage />} />} />
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
