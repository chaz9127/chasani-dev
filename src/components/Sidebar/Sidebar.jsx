import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrientation } from 'react-use';
import 'boxicons';
import './Sidebar.scss';

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const { type } = useOrientation(); 
  const navigate = useNavigate();
  
  const goToUrl = (url) => {
    window.open(url, '_blank').focus();
  }

  const closeSideNav = () => {
    setOpenMobileNav(false)
    setActive(false);
  }

  useEffect(() => {
    if (type === 'landscape-primary' && window.screen.width > 768) {
      setActive(true);
    } else {
      closeSideNav()
    }
  }, [type])

  useEffect(() => {
    document.getElementsByClassName('content')[0].addEventListener('click', () => {
      if (window.screen.width < 768) {
        closeSideNav
      }
  })
    setTimeout(() => {
      const screenWidth = window.screen.width;
      if (screenWidth > 768) {
        setActive(true);
      }
      
      const pathname = window.location.pathname;
      const activeTabName = pathname !== '/' ? pathname.substring(1) : 'home';
      setActiveTab(activeTabName)
    }, 100)
    
  }, []);
  
  const setAndNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
    if (window.screen.width <= 768) {
      closeSideNav();
    }
  }

  const openSideNav = () => {
    setOpenMobileNav(true)
    setActive(true);
  }

  return (
    <>
      <div className="expand-sidebar">
        <i onClick={openSideNav} className='bx bx-menu-alt-left' ></i>
      </div>
      {openMobileNav && <div className="close-sidebar">
        <i onClick={closeSideNav} className='bx bx-arrow-to-left'></i>
      </div>}
      <div className={`sidebar ${openMobileNav ? 'open-in-mobile' : ''}`}>
        <div className={`sidebar-content ${active ? 'active' : ''}`}>
          <div className="name-card">
            <div className="name-card-img-container">
              <img className='name-card-img' src="https://media.licdn.com/dms/image/C5603AQHA684Rre4Fdg/profile-displayphoto-shrink_200_200/0/1547578847568?e=1724284800&v=beta&t=aO2fcG9T7sDG2he6N-wri-OcoLbcWxFJ7Qt5_w0vT58" alt="Chasani Douglas Headshot" />
            </div>
            <div className="name-card-info">
              <h1 className='name-card-name'>Chasani Douglas</h1>
              <h3 className="name-card-job">Fullstack Engineer</h3>
            </div>
          </div>
          <nav>
            <ul>
              <li onClick={() => {setAndNavigate('home', '/')}} className={activeTab === 'home' ? 'active' : '' }><i className="bx bx-home"></i>Home</li>
              <li onClick={() => {setAndNavigate('about', '/about')}} className={activeTab === 'about' ? 'active' : '' }><i className='bx bx-message-rounded-detail' ></i>About</li>
              <li onClick={() => {setAndNavigate('resume', '/resume')}} className={activeTab === 'resume' ? 'active' : '' }><i className='bx bx-file' ></i>Resume</li>
              <li onClick={() => {setAndNavigate('contact', '/contact')}} className={activeTab === 'contact' ? 'active' : '' }><i className='bx bx-envelope' ></i>Contact</li>
            </ul>
            <ul>
              <strong>Find Me</strong>
              <li onClick={() => {goToUrl('https://www.linkedin.com/in/chasani/')}}><i className='bx bxl-linkedin-square'></i>Linkedin</li>
              <li onClick={() => {goToUrl('https://github.com/chaz9127')}}><i className='bx bxl-github' ></i>Github</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
