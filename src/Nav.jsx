import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Nav() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const input = search.toLowerCase().trim();

      // Simple if-else for matching pages
      if (input === 'html') navigate('/html');
      else if (input === 'css') navigate('/css');
      else if (input === 'js' || input === 'javascript') navigate('/js');
      else if (input === 'python') navigate('/python');
      else if (input === 'c++' || input === 'c') navigate('/c');
      else if (input === 'ruby') navigate('/ruby');
      else if (input === 'numpy') navigate('/numpy');
      else if (input === 'pandas') navigate('/pandas');
      else if (input === 'sql') navigate('/sql');
      else if (input === 'r') navigate('/r');
      else if (input === 'typescript') navigate('/typescript');
      else alert('Page not found!');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Programiz</span>
        <div className="navbar-item">Tutorials</div>
        <div className="navbar-item">Examples</div>
        <div className="navbar-item pro-tag">PRO</div>
        <div className="navbar-item">Courses</div>
      </div>

      <div className="navbar-right">
        <input
          className="search-input"
          type="text"
          placeholder="Search tutorials & examples"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="login-button">Login to PRO</button>
      </div>
    </nav>
  );
}

export default Nav;