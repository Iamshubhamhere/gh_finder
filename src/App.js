
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './Pages/Search'
import User from './Pages/User';
import './Styles/index.css';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="gh_finder/" element={<Search />} />
          <Route path="gh_finder/user/:username" element={<User />} />
        </Routes>
      </div>
  );
}

export default App;