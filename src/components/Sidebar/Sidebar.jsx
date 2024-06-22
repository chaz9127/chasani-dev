// src/components/Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons';
import './Sidebar.scss';

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
      const pathname = window.location.pathname;
      const activeTabName = pathname !== '/' ? pathname.substring(1) : 'home';
      setActiveTab(activeTabName)
    }, 300)
    
  }, []);

  return (
    <div className={`sidebar`}>
      <div className={`sidebar-content ${active ? 'active' : ''}`}>
        <div className="name-card">
          <div className="name-card-img-container">
            <img className='name-card-img' src="https://media.licdn.com/dms/image/C5603AQHA684Rre4Fdg/profile-displayphoto-shrink_200_200/0/1547578847568?e=1724284800&v=beta&t=aO2fcG9T7sDG2he6N-wri-OcoLbcWxFJ7Qt5_w0vT58" alt="Chasani Douglas Headshot" />
          </div>
          <div className="name-card-info">
            <h1 className='name-card-name'>Chasani Douglas</h1>
            <h2 className="name-card-job">Fullstack Engineer</h2>
          </div>
        </div>
        <nav>
          <ul>
            <li onClick={() => {setActiveTab('home')}} className={activeTab === 'home' ? 'active' : '' }><i className="bx bx-home"></i><Link to="/">Home</Link></li>
            <li onClick={() => {setActiveTab('about')}} className={activeTab === 'about' ? 'active' : '' }><i className='bx bx-message-rounded-detail' ></i><Link to="/about">About</Link></li>
            <li onClick={() => {setActiveTab('projects')}} className={activeTab === 'projects' ? 'active' : '' }><i className='bx bx-windows'></i><Link to="/projects">Projects</Link></li>
            <li onClick={() => {setActiveTab('resume')}} className={activeTab === 'resume' ? 'active' : '' }><i className='bx bx-file' ></i><Link to="/resume">Resume</Link></li>
          </ul>
          <ul>
            <strong>Find Me</strong>
            <li><i className='bx bxl-linkedin-square'></i><Link to="https://www.linkedin.com/in/chasani/" target="_blank">Linkedin</Link></li>
            <li><i className='bx bxl-github' ></i><Link to="https://github.com/chaz9127" target="_blank">Github</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
