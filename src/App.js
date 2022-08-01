import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Swarmobot from './components/Swarmobot/Swarmobot';
import Team from './components/Team/Team';
import Publications from './components/Publications/Publications';
import Media from './components/Media/Media';
import Footer from './components/Footer/Footer';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => setWidth(window.innerWidth));

  return (
    <Router>
      <Navbar />
      <AboutUs width={width} />
      <Swarmobot width={width} />
      <Team width={width} />
      <Publications width={width} />
      <Media width={width} />
      <Footer width={width} />
    </Router>
  );
}

export default App;
