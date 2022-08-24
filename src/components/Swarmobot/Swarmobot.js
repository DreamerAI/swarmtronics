import React, { useEffect } from 'react';
import './Swarmobot.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Swarmobot({ width }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="swarmobot-container" id="Swarmobot">
        <div className="swarmobot__title--wrapper" data-aos="fade-down">
          <h2 className="swarmobot__title">Swarmobot</h2>
          {width <= 960 ? null : (
            <h2 className="swarmobot__title swarmobot__title--stroke">ABOUT US</h2>
          )}
        </div>
        <div className="swarmobot__description--wrapper" data-aos="fade-down">
          <p className="swarmobot__description">
            Swarmobot is an open bristle-bot platform for experiments in the emerging field of
            active matter. These robots are rechargeable, remotely controlled, and can be
            reconfigured in multiple geometries optimized for 3D-printing. Supplied with a
            recognition software for automatic extraction of swarm motion characteristics, these
            robots can be easily produced and maintained for research and educational purposes.
          </p>
        </div>

        <div className="swarmobot__links--wrapper">
          <p className="swarmobot__links--text">
            Printed circuit board design and supplementary documentation:
            <a
              href="https://github.com/swarmtronics/swarmdroid.processing"
              className="swarmobot__links">
              GITHUB
            </a>
          </p>
          <p className="swarmobot__links--text">
            Software for post-processing of experiments:
            <a
              href="https://github.com/swarmtronics/swarmdroid.processing"
              className="swarmobot__links">
              GITHUB
            </a>
          </p>
          <p className="swarmobot__links--text">
            Detailed description of the platform:
            <a href="#" className="swarmobot__links">
              TBD
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Swarmobot;
