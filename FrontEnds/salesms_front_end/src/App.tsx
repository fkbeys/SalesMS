import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';

import MissingPage from './Pages/MissingPage';
import DashboardPage from './Pages/DashboardPage';
import { ThemeProvider } from '@emotion/react';
import { useAppSelector } from './app/hooks';
import { RequireAuth } from 'react-auth-kit';
import LayoutPage from './Pages/LayoutPage';
import darkTheme from './Components/CssFolder/DarkThemeCss';
import lightTheme from './Components/CssFolder/LightTheme';
import AuthController from './Authorization/AuthController';
import CatalogPage from './Pages/CatalogPage';
import UnAuthorizedPage from './Pages/UnAuthorizedPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import PaymentPage from './Pages/PaymentPage';
import OrderPage from './Pages/OrderPage';
import BasketPage from './Pages/Basketpage';

function App() {

  const ThemeSlice = useAppSelector(state => state.ThemeSlice);
  function themeSelector() {
    return ThemeSlice.currentTheme === "dark" ? darkTheme : lightTheme;
  }



  return (

    <ThemeProvider theme={themeSelector}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<CatalogPage />} />
          <Route path={'/CatalogPage'} element={<CatalogPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/DashboardPage' element={<AuthController component={<DashboardPage />} />} />

          <Route path='/BasketPage' element={<AuthController component={<BasketPage />} />} />
          <Route path='/OrderPage' element={<AuthController component={<OrderPage />} />} />
          <Route path='/PaymentPage' element={<AuthController component={<PaymentPage />} />} />
          <Route path='/ProductDetailPage' element={<AuthController component={<ProductDetailPage />} />} />
          <Route path='/UnAuthorizedPage' element={<AuthController component={<UnAuthorizedPage />} />} />






          <Route path='*' element={<RequireAuth loginPath='/' children={<LayoutPage children={<MissingPage />} />} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
