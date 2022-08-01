import React, { useState } from 'react';
import './Navbar.css';

import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';

import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <HashLink to="/" className="navbar-logoText" onClick={closeMobileMenu}>
              Swarmtronics
            </HashLink>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <HashLink to="#About-us" className="nav-links" onClick={closeMobileMenu} smooth>
                  About us
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Swarmobot" className="nav-links" onClick={closeMobileMenu} smooth>
                  Swarmobot
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Team" className="nav-links" onClick={closeMobileMenu} smooth>
                  Team
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Publications" className="nav-links" onClick={closeMobileMenu} smooth>
                  Publications
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Media" className="nav-links" onClick={closeMobileMenu} smooth>
                  Media
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Contacts" className="nav-links" onClick={closeMobileMenu} smooth>
                  Contacts
                </HashLink>
              </li>
              <p className="nav-language nav-item">
                <HashLink to="/language" className="nav-links" onClick={closeMobileMenu}>
                  RU
                </HashLink>
              </p>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
