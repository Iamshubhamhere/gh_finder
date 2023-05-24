import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const Navigate = useNavigate();
  const backToHome = () => {
    Navigate('./gh_finder');
  }

  useEffect(() => {

    const getUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
    getRepos();
  } ,[]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input type='button' className='home' onClick={backToHome} value='Home' ></input>
       <div className='info'>
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
         
        <span>{user.followers}</span>
        <span>{user.following}</span>
        <span>{user.public_repos}</span>
        <div className='p'>
          
          <p>Followers</p>
          <p>Following</p>
          <p>Repositories</p>
        </div>
        <button>
        <Link 
          className='link' 
          target="_blank"
          to={`https://github.com/${user.login}`}>
          Go To GitHub
        </Link>
      </button>
      </div>
      <div className='repository'>
        <h2>Public Repositories</h2>
        {repos.map((repo) => (
          <div className="repo" key={repo.id}>
            <div>
              <h3>{repo.name}</h3>
              <p>{(repo.description)? repo.description: "No Description found"}</p>
            </div>
            <div className="updation">
              Updated on {new Date(repo.updated_at).toLocaleDateString('en-US', 
              { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
        </div>
      ))}
      
    </div>
    </div>
  );
};

export default User;