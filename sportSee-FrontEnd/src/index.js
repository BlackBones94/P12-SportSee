import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import "./styles/main.scss";
import './index.css';

// COmposants
import Header from './componants/Header';
import Aside from './componants/Aside';

// Pages
import Home from './pages/Home';
import Profile from './pages/Profile';

// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path='/user/:id' element={<Profile />}/>
      </Routes>
      <Aside />
    </Router>
  </React.StrictMode>
);

