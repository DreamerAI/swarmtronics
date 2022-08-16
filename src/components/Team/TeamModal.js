import React from 'react';
import './TeamModal.css';

import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { SiGooglescholar, SiResearchgate } from 'react-icons/si';
import { IconContext } from 'react-icons';

import { Link } from 'react-router-dom';

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="team__modal--emailLink"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}>
      {label}
    </Link>
  );
};

function TeamModal({ activeCard, setShowModal, showModal }) {
  console.log();
  return (
    <>
      <div
        className={`team__modal--wrapper ${showModal ? 'show' : ''}`}
        onClick={() => setShowModal(false)}>
        <div className="team__modal--container" onClick={(e) => e.stopPropagation()}>
          <div className="team__modal--header">
            <AiOutlineClose color="rgba(50, 50, 50, 0.8)" onClick={() => setShowModal(false)} />
          </div>
          <img src={activeCard.personImg} alt="" />
          <div className="team__modal--title">
            <p className="team__modal--cardName">{activeCard.name}</p>
            <p className="team__modal--cardPosition">{activeCard.position}</p>
          </div>
          <div className="team__modal--email">
            <ButtonMailto label={activeCard.email} mailto={`mailto:${activeCard.email}`} />
          </div>
          <div className="team__modal--links">
            <IconContext.Provider value={{ size: '40', color: '#000000' }}>
              <div className="team__modal--linksIcons">
                {Boolean(activeCard.LinkedIn) ? (
                  <a href={activeCard.LinkedIn}>
                    <IoLogoLinkedin />
                  </a>
                ) : null}
                {Boolean(activeCard.Instagram) ? (
                  <a href={activeCard.Instagram}>
                    <IoLogoInstagram />
                  </a>
                ) : null}
                {Boolean(activeCard.GoogleSC) ? (
                  <a href={activeCard.GoogleSC}>
                    <SiGooglescholar />{' '}
                  </a>
                ) : null}
                {Boolean(activeCard.Twitter) ? (
                  <a href={activeCard.Twitter}>
                    {' '}
                    <IoLogoTwitter />{' '}
                  </a>
                ) : null}
                {Boolean(activeCard.ResearchGate) ? (
                  <a href={activeCard.ResearchGate}>
                    {' '}
                    <SiResearchgate size={35} />
                  </a>
                ) : null}
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamModal;
