import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoVk,
  IoMail,
} from 'react-icons/io5';

function Footer({ width }) {
  return (
    <>
      <IconContext.Provider value={{ size: '40', color: '#fff' }}>
        <div className="footer-container" id="Contacts">
          <div className="footer__headline">
            <span>Swarmtronics</span>
          </div>
          <div className="footer__email">
            <IoMail size={width <= 960 ? 30 : 40} />
            <span className="footer__info">contact@swarmtronics.com</span>
          </div>
          <div className="footer__address">
            <IoLocationSharp size={width <= 960 ? 30 : 40} />
            <span className="footer__info">Lomonosova, 9</span>
          </div>
          <div className="footer__links">
            <Link
              to={{
                pathname:
                  'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies',
              }}
              target="_blank">
              <IoLogoInstagram />
            </Link>
            <a href="/">
              <IoLogoLinkedin />
            </a>
            <a href="/">
              <IoLogoFacebook />
            </a>
            <a href="/">
              <IoLogoVk />
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
