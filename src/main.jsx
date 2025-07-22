
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Mygame from './Mygame';
import Welcome from './Welcome';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='charanya'>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="app" element={<App />} />
      <Route path="mygame" element={<Mygame />} />
    </Routes>
  </BrowserRouter>
);