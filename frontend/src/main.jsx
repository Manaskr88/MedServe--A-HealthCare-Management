import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import ContextProvider from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     

     <ContextProvider>

      <App />

     </ContextProvider>


  </BrowserRouter>
)
