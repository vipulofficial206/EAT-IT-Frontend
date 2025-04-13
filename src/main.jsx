import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, HashRouter as Router } from 'react-router-dom';
import Storecontextprovider from './context/Storecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <HashRouter>
    <Storecontextprovider>
      <App/>
    </Storecontextprovider>
    </HashRouter>
    </StrictMode>
)
