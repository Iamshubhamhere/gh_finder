
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './Pages/Search'
import User from './Pages/User';
import './Styles/index.css';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </div>
  );
}

export default App;