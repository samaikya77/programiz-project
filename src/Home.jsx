import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SiPython, SiHtml5, SiJavascript, SiCss3, SiKotlin, SiRust, SiSwift,
  SiMysql, SiPandas, SiNumpy, SiR, SiRuby, SiCplusplus, SiTypescript
} from 'react-icons/si';
import Nav from './Nav';
import './index.css';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className="home-container">
        <h1>Welcome to Home</h1>

        <button onClick={() => navigate('/python')} className="home-button"><SiPython /> Python</button>
        <button onClick={() => navigate('/html')} className="home-button"><SiHtml5 /> HTML</button>
        <button onClick={() => navigate('/js')} className="home-button"><SiJavascript /> JavaScript</button>
        <button onClick={() => navigate('/css')} className="home-button"><SiCss3 /> CSS</button>
        <button onClick={() => navigate('/sql')} className="home-button"><SiMysql /> SQL</button>
        <button onClick={() => navigate('/pandas')} className="home-button"><SiPandas /> Pandas</button>
        <button onClick={() => navigate('/numpy')} className="home-button"><SiNumpy /> NumPy</button>
        <button onClick={() => navigate('/r')} className="home-button"><SiR /> R</button>
        <button onClick={() => navigate('/ruby')} className="home-button"><SiRuby /> Ruby</button>
        <button onClick={() => navigate('/c')} className="home-button"><SiCplusplus /> C++</button>
        <button onClick={() => navigate('/typescript')} className="home-button"><SiTypescript /> TypeScript</button>
        <button onClick={() => navigate('/kotlin')} className="home-button"><SiKotlin /> Kotlin</button>
        <button onClick={() => navigate('/rust')} className="home-button"><SiRust /> Rust</button>
        <button onClick={() => navigate('/swift')} className="home-button"><SiSwift /> Swift</button>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
           <span className="footer-logo-text">Programiz</span>
           <span className="footer-pro-tag">PRO</span>
        </div>
           <h2 className="footer-heading">Our Hands-on Coding Platform</h2>
           <p className="footer-description">
           Created with a decade of experience in teaching programming and
           helping students all over the world.
           </p>
     </footer>
    </>
  );
}

export default Home;
