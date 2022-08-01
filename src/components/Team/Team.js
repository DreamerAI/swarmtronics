import React, { useEffect } from 'react';
import './Team.css';

import {
  firstPerson,
  secondPerson,
  thirdPerson,
  fourthPerson,
  fifthPerson,
  sixthPerson,
  seventhPerson,
  eighthPerson,
  ninethPerson,
  tenthPerson,
  eleventhPerson,
  twelfthPerson,
} from './TeamData';

import AOS from 'aos';
import 'aos/dist/aos.css';

function TeamCard({ name, position, personImg }) {
  return (
    <>
      <div className="team__card--wrapper">
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
          <TeamCard {...firstPerson} />
          <TeamCard {...secondPerson} />
          <TeamCard {...thirdPerson} />
        </div>
        <div className="team__card--row" data-aos="fade-right">
          <TeamCard {...fourthPerson} />
          <TeamCard {...fifthPerson} />
          <TeamCard {...sixthPerson} />
        </div>
        <div className="team__card--row" data-aos="fade-right">
          <TeamCard {...seventhPerson} />
          <TeamCard {...eighthPerson} />
          <TeamCard {...ninethPerson} />
        </div>
        <div className="team__card--row" data-aos="fade-right">
          <TeamCard {...tenthPerson} />
          <TeamCard {...eleventhPerson} />
          <TeamCard {...twelfthPerson} />
        </div>
      </div>
    </>
  );
}

export default Team;
