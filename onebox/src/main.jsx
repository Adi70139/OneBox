import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const domain ="dev-8yabonbpiwhxyt8f.us.auth0.com"
const clientId="KCIFi1dX3fvadZXn004nlv3xkvdgq7YI"

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Auth0Provider>
);
