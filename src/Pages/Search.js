
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (username.trim() !== '') {
     
      if (isValidUsername(username)) {
        navigate(`/gh_finder/user/${username}`);
      } else {
        setError('Invalid username. Please enter a valid username.');
      }
    } else {
      setError('Please enter a username.');
    }
  };

  const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,}[a-zA-Z0-9]$/;
    return (
      username.length >= 3 &&
      username.match(usernameRegex) !== null
    );
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
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Search;