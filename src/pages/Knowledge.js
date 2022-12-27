import React, { useContext, useState } from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/Knowledge.css';
import AppContext from '../context/AppContext';
import { technologiesList } from './helpers/tecnologiesList';
// import Carousel from '../components/Carousel/Carousel';

function AboutMe() {
  const { theme } = useContext(AppContext);
  const [selectedTech, setSelectedTech] = useState('');

  const getTechName = (name) => {
    setSelectedTech(name);
  };

  return (
    <div className="about-screen">
      <Header />
      <main className={`general-container-${ theme }`}>
        <section id="knowledge">          
          <article id={ `tecnologies-${ theme }` }>
            <h4 className="article-title">Knowledge</h4>
            <div className="list-container">
              {
                technologiesList.map((tecnologie) => (
                  <img
                  key={ tecnologie.name }
                  src={ tecnologie.thumb }
                  alt={ tecnologie.name }
                  className="tech-icon"
                  onClick={ () => getTechName(tecnologie.name) } />
                ))
              }
            </div>
          </article>
        </section>
        {
          selectedTech !== '' ? (
          <section className={`tech-description-container-${ theme }`}>
            <h2 className={`tech-name`}>{selectedTech}</h2>
            <p className={`tech-description`}>
              {
                technologiesList.filter((e) => (e.name === selectedTech))[0].description
              }
            </p>
          </section>
          ) : (
            <div className="null"></div>
          )
        }
        {/* <Carousel /> */}
      </main>
      <Footer />
    </div>
  )
}

export default AboutMe;
