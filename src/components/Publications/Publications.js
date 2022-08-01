import React, { useEffect, useState } from 'react';
import data from './PublicationData';
import './Publications.css';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PublicationsCard = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <IconContext.Provider value="color:#fff">
        <div className="publications__card--container">
          <div
            className={expanded ? 'publications__card--wrapperDark' : 'publications__card--wrapper'}
            onClick={() => setExpanded(!expanded)}>
            <button className="publcations__card--btn">
              {expanded ? <AiOutlineMinus color="white" /> : <AiOutlinePlus />}
            </button>
            <h4 className="publications__card--title">{title}</h4>
          </div>
          <div className="publications__card--info">
            {expanded && (
              <p className="publications__card--info-wrapper">
                {info.firstParagraph}
                <p className="publications__card--link">
                  <a href={info.firstLink}>{info.firstLink}</a>
                </p>
                {info.secondParagraph}
                <p className="publications__card--link">
                  <a href={info.secondLink}>{info.secondLink}</a>
                </p>
                {info.thirdParagraph}
                <p className="publications__card--link">
                  <a href={info.thirdLink}>{info.thirdLink}</a>
                </p>
              </p>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

function Publications({ width }) {
  const [questions, setQuestions] = useState(data);
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
          {questions.map((question) => (
            <PublicationsCard key={question.id} {...question} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Publications;
