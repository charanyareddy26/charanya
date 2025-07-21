import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mygame from './Mygame.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="app" element={<App/>}></Route>
    <Route
   path='mygame' element={<Mygame/>}></Route>
   <Route path='/' element={<Welcome/>}></Route>
   </Routes>
  </BrowserRouter>
)