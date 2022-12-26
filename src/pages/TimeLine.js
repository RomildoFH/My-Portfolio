import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Timeline from '../components/Timeline/Timeline';
import AppContext from '../context/AppContext';
import '../styles/TimeLine.css';

function TimeLine() {
  const { theme } = useContext(AppContext);
  return (
    <div className={`timeline-general ${ theme === 'light' ? 'fullwhite' : 'fullgray' }`}>
      <Header />
      <Timeline />
      <Footer />
    </div>
  )
}

export default TimeLine;
