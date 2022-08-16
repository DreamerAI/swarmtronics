import React from 'react';
import './AboutUs.css';

function AboutUs({ width }) {
  return (
    <>
      <div className="aboutUs-container" id="About-us">
        <div className="aboutUs__title--wrapper">
          <h2 className="aboutUs__title">ABOUT US</h2>
          {width <= 960 ? null : (
            <h2 className="aboutUs__title aboutUs__title--stroke">ABOUT US</h2>
          )}
        </div>
        <p className="aboutUs__description">
          <span className="aboutUs__description--headline">Swarmtronics(R) team </span>
          is dedicated to the development of robotic swarms composed of very simple robots yet
          capable of self-organizing and performing complex tasks. To achieve our goal, we perform
          deep fundamental research of the underlying many-particle physics and develop robotic
          platforms distributed freely under GPL license.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
