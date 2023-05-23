
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (username.trim() !== '') {
      navigate(`/gh_finder/user/${username}`);
    }
  };

  return (
    <div className='search-box'>
      <h1>GitHub Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Profile Name"
          name='input'
          value={username}
          onChange={handleInputChange}
        />
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
};

export default Search;