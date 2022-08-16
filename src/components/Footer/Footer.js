import React from 'react';
import './Footer.css';

import { IconContext } from 'react-icons';
import {
  IoLocationSharp,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoVk,
  IoMail,
} from 'react-icons/io5';
import { SiResearchgate } from 'react-icons/si';
import { Link } from 'react-router-dom';

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="footer__info"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}>
      {label}
    </Link>
  );
};

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
            <ButtonMailto
              label="contact@swarmtronics.com"
              mailto="mailto:contact@swarmtronics.com"
            />
          </div>
          <div className="footer__address">
            <IoLocationSharp size={width <= 960 ? 30 : 40} />

            <a
              href="https://goo.gl/maps/Kxcp4FW2GwHm1xDF7"
              rel="noreferrer"
              target="_blank"
              className="footer__info">
              Lomonosova, 9
            </a>
          </div>
          <div className="footer__links">
            <a href="https://www.instagram.com/swarmtronics/">
              <IoLogoInstagram />
            </a>
            <a href="https://ru.linkedin.com/company/swarmtronics">
              <IoLogoLinkedin />
            </a>
            <a href="https://twitter.com/swarmtronics">
              <IoLogoTwitter />
            </a>
            <a href="https://m.vk.com/swarmtronics">
              <IoLogoVk />
            </a>
            <a href="https://researchgate.net/lab/swarmtronics">
              <SiResearchgate size={35} />
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
