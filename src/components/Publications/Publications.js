import React, { useEffect, useState } from 'react';
import { conference_papers, preprints, journal_articles } from './PublicationData';
import './Publications.css';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PublicationsCard = ({ title, publicationsArr }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState('0px');

  function toggleAccordion() {
    setExpanded(!expanded);
    setHeight(expanded ? '0px' : '1000px');
  }
  return (
    <>
      <IconContext.Provider value="color:#fff">
        <div className="publications__card--container">
          <div
            className={`publications__card--wrapper ${
              expanded ? 'publications__card--wrapperDark' : ' '
            }`}
            onClick={() => toggleAccordion()}
          >
            <button className="publcations__card--btn">
              {expanded ? <AiOutlineMinus color="white" /> : <AiOutlinePlus />}
            </button>
            <div className="publications__card--title">
              <p>{title}</p>
            </div>
          </div>
          <div style={{ maxHeight: `${height}` }} className={`publications__card--info `}>
            {publicationsArr.map(({ id, info, link }) => (
              <div className="publications__card--link" data-aos="fade-right" key={id}>
                <p>{info}</p>
                <a href={link}>{link ? 'Link' : null}</a>
              </div>
            ))}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

function Publications({ width }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="publications-container" id="Publications">
        <div className="publications__title--wrapper" data-aos="flip-left">
          <h2 className="publications__title">Publications</h2>
          {width <= 960 ? null : (
            <h2 className="publications__title publications__title--stroke">Publications</h2>
          )}
        </div>
        <div className="publications__accordion--wrapper">
          <PublicationsCard title={'Preprints'} publicationsArr={preprints} />
          <PublicationsCard title={'Journal Articles'} publicationsArr={journal_articles} />
          <PublicationsCard title={'Conference Papers'} publicationsArr={conference_papers} />
        </div>
      </div>
    </>
  );
}

export default Publications;
