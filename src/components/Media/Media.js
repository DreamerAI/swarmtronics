import React, { useEffect, useState } from 'react';
import './Media.css';

import data from './mediaData';

import Slider from './Slider';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Media({ width }) {
  const [index, setIndex] = useState(0);
  const [news, setNews] = useState(data);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index, news]);

  return (
    <>
      <div className="media-container" id="Media">
        <div className="media__headline--wrapper" data-aos="flip-left">
          <h2 className="media__title">Media</h2>
          {width <= 960 ? null : <h2 className="media__title media__title--stroke">Media</h2>}
        </div>
        <div className="media__content--wrapper" data-aos="fade-right">
          <div className="media__news--headline">
            <p>Recent mentions in news portals and blogs</p>
          </div>
          <div className="media__news--container">
            {news.map((person, personIndex) => {
              return <Slider key={person.id} {...person} personIndex={personIndex} index={index} />;
            })}
          </div>
          <div className="media__next-btn">
            <span href="#" className="media__btn" onClick={() => setIndex(index - 1)}>
              ← {width <= 960 ? null : 'Prev'}
            </span>
            <span href="#" className="media__btn" onClick={() => setIndex(index + 1)}>
              → {width <= 960 ? null : 'Next'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
