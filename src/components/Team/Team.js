import React, { useEffect, useState } from 'react';
import './Team.css';

import { firstRow, secondRow, thirdRow, fourthRow } from './TeamData';

import AOS from 'aos';
import 'aos/dist/aos.css';
import TeamModal from './TeamModal';

function TeamCard({
  name,
  position,
  personImg,
  description,
  email,
  LinkedIn,
  GoogleSC,
  ResearchGate,
  callback,
  setShowModal,
}) {
  return (
    <>
      <div
        className="team__card--wrapper"
        onClick={() =>
          callback &&
          callback(
            name,
            position,
            personImg,
            description,
            email,
            LinkedIn,
            GoogleSC,
            ResearchGate,
            setShowModal(true),
          )
        }>
        <div>
          <img src={personImg} alt="альтернативный текст" className="team__img" />
        </div>
        <div className="team__cardBio">
          <p className="team__cardName">{name}</p>
          <p className="team__cardPosition">{position}</p>
        </div>
      </div>
    </>
  );
}

function Team({ width }) {
  const [activeCard, setActiveCard] = useState({
    name: null,
    position: null,
    personImg: null,
    description: null,
    email: null,
    LinkedIn: null,
    GoogleSC: null,
    ResearchGate: null,
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="team-container" id="Team">
        <div className="team__headline--wrapper" data-aos="flip-left">
          <h2 className="team__title">Team</h2>
          {width <= 960 ? null : <h2 className="team__title team__title--stroke">Team</h2>}
        </div>
        <div className="team__card--row" data-aos="fade-right">
          {firstRow.length &&
            firstRow.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                position={item.position}
                personImg={item.personImg}
                email={item.email}
                description={item.description}
                LinkedIn={item.LinkedIn}
                GoogleSC={item.GoogleSC}
                ResearchGate={item.ResearchGate}
                setShowModal={setShowModal}
                callback={(
                  name,
                  position,
                  personImg,
                  description,
                  email,
                  LinkedIn,
                  GoogleSC,
                  ResearchGate,
                ) =>
                  setActiveCard((prev) => ({
                    name,
                    position,
                    personImg,
                    description,
                    email,
                    LinkedIn,
                    GoogleSC,
                    ResearchGate,
                  }))
                }
              />
            ))}
        </div>
        <div className="team__card--row" data-aos="fade-right">
          {secondRow.length &&
            secondRow.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                position={item.position}
                personImg={item.personImg}
                email={item.email}
                description={item.description}
                LinkedIn={item.LinkedIn}
                GoogleSC={item.GoogleSC}
                ResearchGate={item.ResearchGate}
                setShowModal={setShowModal}
                callback={(
                  name,
                  position,
                  personImg,
                  description,
                  email,
                  LinkedIn,
                  GoogleSC,
                  ResearchGate,
                ) =>
                  setActiveCard((prev) => ({
                    name,
                    position,
                    personImg,
                    description,
                    email,
                    LinkedIn,
                    GoogleSC,
                    ResearchGate,
                  }))
                }
              />
            ))}
        </div>
        <div className="team__card--row" data-aos="fade-right">
          {thirdRow.length &&
            thirdRow.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                position={item.position}
                personImg={item.personImg}
                email={item.email}
                description={item.description}
                LinkedIn={item.LinkedIn}
                GoogleSC={item.GoogleSC}
                ResearchGate={item.ResearchGate}
                setShowModal={setShowModal}
                callback={(
                  name,
                  position,
                  personImg,
                  description,
                  email,
                  LinkedIn,
                  GoogleSC,
                  ResearchGate,
                ) =>
                  setActiveCard((prev) => ({
                    name,
                    position,
                    personImg,
                    description,
                    email,
                    LinkedIn,
                    GoogleSC,
                    ResearchGate,
                  }))
                }
              />
            ))}
        </div>
        <div className="team__card--row" data-aos="fade-right">
          {fourthRow.length &&
            fourthRow.map((item, index) => (
              <TeamCard
                key={index}
                name={item.name}
                position={item.position}
                personImg={item.personImg}
                email={item.email}
                description={item.description}
                LinkedIn={item.LinkedIn}
                GoogleSC={item.GoogleSC}
                ResearchGate={item.ResearchGate}
                setShowModal={setShowModal}
                callback={(
                  name,
                  position,
                  personImg,
                  description,
                  email,
                  LinkedIn,
                  GoogleSC,
                  ResearchGate,
                ) =>
                  setActiveCard((prev) => ({
                    name,
                    position,
                    personImg,
                    description,
                    email,
                    LinkedIn,
                    GoogleSC,
                    ResearchGate,
                  }))
                }
              />
            ))}
        </div>
        <TeamModal activeCard={activeCard} setShowModal={setShowModal} showModal={showModal} />
      </div>
    </>
  );
}

export default Team;
