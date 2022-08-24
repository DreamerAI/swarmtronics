import React from 'react';
import news from './mediaData';

import './Slider.css';

const Slider = ({ id, resource, title, link, personIndex, index }) => {
  let position = 'nextSlide';
  if (personIndex === index) {
    position = 'activeSlide';
  }
  if (personIndex === index - 1 || (index === 0 && personIndex === news.length - 1)) {
    position = 'lastSlide';
  }
  return (
    <>
      <article className={position} key={id}>
        <p className="slider__resource">{resource}</p>
        <p className="slider__title">{title}</p>
        <a href={link}>Link</a>
      </article>
    </>
  );
};

export default Slider;
// const Carousel = ({ children, setActiveIndex, activeIndex }) => {
//   const updateIndex = (newIndex) => {
//     if (newIndex < 0) {
//       newIndex = React.Children.count(children) - 1;
//     } else if (newIndex >= React.Children.count(children)) {
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//   };

// const handlers = useSwipeable({
//   onSwipedLeft: () => updateIndex(activeIndex + 1),
//   onSwipedRight: () => updateIndex(activeIndex - 1),
// });

// return (
//   <div {...handlers} className="carousel">
//     <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//       {React.Children.map(children, (child, index) => {
//         return React.cloneElement(child, { width: '100%' });
//       })}
//     </div>
