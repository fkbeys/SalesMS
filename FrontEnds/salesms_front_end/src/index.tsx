
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import './i18n.js';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from 'react-auth-kit'
import RefreshTokenApiManager from './Authorization/RefreshTokenApiManager';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(


  <Provider store={store} >
    <AuthProvider authType='cookie' authName="_auth_t" refresh={RefreshTokenApiManager} cookieSecure={false}   >
      <Suspense fallback="Loading...">
        <Toaster />
        <App />
      </Suspense>
    </AuthProvider>
  </Provider>





);

