import React from 'react';
import './TeamModal.css';

import { AiOutlineClose } from 'react-icons/ai';
import { SiGooglescholar, SiResearchgate, SiLinkedin } from 'react-icons/si';
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
          {/* First Grid */}
          <div className="team__modal--header">
            <AiOutlineClose
              onClick={() => setShowModal(false)}
              className="team__modal--closeIcon"
            />
          </div>
          {/* Second Grid */}
          <img src={activeCard.personImg} alt="activeCard_picture" className="team__modal--image" />
          {/* Third Grid */}
          <div className="team__modal--title">
            <p className="team__modal--cardName">{activeCard.name}</p>
            <p className="team__modal--cardPosition">{activeCard.position}</p>
          </div>
          {/* Fourth Grid */}
          <div className="team__modal--email">
            <p className="team__modal--description">{activeCard.description}</p>
            <ButtonMailto label={activeCard.email} mailto={`mailto:${activeCard.email}`} />
          </div>
          {/* Fifth Grid */}
          <div className="team__modal--links">
            <IconContext.Provider value={{ size: '40', color: '#000000' }}>
              <div className="team__modal--linksIcons">
                {Boolean(activeCard.LinkedIn) ? (
                  <a href={activeCard.LinkedIn}>
                    <SiLinkedin />
                  </a>
                ) : null}
                {Boolean(activeCard.GoogleSC) ? (
                  <a href={activeCard.GoogleSC}>
                    <SiGooglescholar />{' '}
                  </a>
                ) : null}
                {Boolean(activeCard.ResearchGate) ? (
                  <a href={activeCard.ResearchGate}>
                    {' '}
                    <SiResearchgate />
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
