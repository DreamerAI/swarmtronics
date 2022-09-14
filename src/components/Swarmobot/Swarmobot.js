import React, { useEffect } from 'react';
import './Swarmobot.css';

import Cap from './botImg/Cap.png';
import Body from './botImg/Body.png';
import Bristles from './botImg/Bristles.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function Swarmobot({ width }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  let swarmbotSize;
  if (width <= 960) {
    swarmbotSize = 180;
  } else swarmbotSize = 160;

  return (
    <>
      <div className="swarmobot-container" id="Swarmobot">
        <div className="swarmobot__title--wrapper" data-aos="fade-down">
          <h2 className="swarmobot__title">Swarmobot</h2>
          {width <= 960 ? null : (
            <h2 className="swarmobot__title swarmobot__title--stroke">ABOUT US</h2>
          )}
        </div>
        <div className="swarmobot__description--wrapper">
          <div className="swarmobot__animation" data-aos="fade-right">
            <motion.div
              className="swarmobot__animation_cap"
              initial="hidden"
              whileInView="visible"
              animate={{
                y: [0, width <= 960 ? 60 : 90, 0],
              }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
            >
              <img src={Cap} alt="" width={swarmbotSize} />
            </motion.div>
            <motion.div
              className="swarmobot__animation_body"
              initial="hidden"
              whileInView="visible"
              animate={{}}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
            >
              <img src={Body} alt="" width={swarmbotSize} />
            </motion.div>
            <motion.div
              className="swarmobot__animation_bristles"
              initial="hidden"
              whileInView="visible"
              animate={{
                y: [0, width <= 960 ? -60 : -90, 0],
              }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
            >
              <img src={Bristles} alt="" width={swarmbotSize} />
            </motion.div>
          </div>
          <div className="swarmobot__text">
            <p className="swarmobot__description" data-aos="fade-down">
              Swarmobot is an open bristle-bot platform for experiments in the emerging field of
              active matter. These robots are rechargeable, remotely controlled, and can be
              reconfigured in multiple geometries optimized for 3D-printing. Supplied with a
              recognition software for automatic extraction of swarm motion characteristics, these
              robots can be easily produced and maintained for research and educational purposes.
            </p>
          </div>
        </div>

        <div className="swarmobot__links--wrapper">
          <p className="swarmobot__links--text">
            Printed circuit board design and supplementary documentation :&nbsp;
            <a
              href="https://github.com/swarmtronics/swarmdroid.processing"
              className="swarmobot__links"
            >
              GITHUB
            </a>
          </p>
          <p className="swarmobot__links--text">
            Software for post-processing of experiments :&nbsp;
            <a
              href="https://github.com/swarmtronics/swarmdroid.processing"
              className="swarmobot__links"
            >
              GITHUB
            </a>
          </p>
          <p className="swarmobot__links--text">
            Detailed description of the platform: &nbsp;
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
