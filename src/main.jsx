import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import NavBar from './components/NavBar.jsx'
const authdomain=import.meta.env.VITE_DOMAIN
const authclientId=import.meta.env.VITE_CLIENT_ID
console.log(authdomain,authclientId)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain={authdomain}
    clientId={authclientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <NavBar/>
    <App />
    </Auth0Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
