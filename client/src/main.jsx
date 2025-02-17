import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProviderWrapper } from './theme/themeCotext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProviderWrapper > */}
      <CssBaseline />
      <App />
      {/* </ThemeProviderWrapper> */}
    </BrowserRouter>
  </React.StrictMode>,
)
