import React, { useEffect, useState } from 'react';
import './Media.css';

import data from './mediaData';

import Slider from './Slider';

import { useSwipeable } from 'react-swipeable';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Media({ width }) {
  const [index, setIndex] = useState(0);
  const [news, setNews] = useState(data);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex(index + 1),
    onSwipedRight: () => setIndex(index - 1),
  });

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
          <div className="media__news--headline">Recent mentions in news portals and blogs</div>
          <div className="media__news--container" {...swipeHandlers}>
            <div className="media__btn btn--prev" onClick={() => setIndex(index - 1)}>
              <AiOutlineLeft />
            </div>
            <div className="media__article">
              {news.map((person, personIndex) => {
                return (
                  <Slider key={person.id} {...person} personIndex={personIndex} index={index} />
                );
              })}
            </div>
            <div className="media__btn btn--next" onClick={() => setIndex(index + 1)}>
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
