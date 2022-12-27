import React, { useState } from 'react';
import { technologiesList } from '../../pages/helpers/tecnologiesList';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = technologiesList.map((e) => e.thumb);

  const handlePrev = () => {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Prev</button>
      <img src={images[currentIndex]} alt={`Image ${ currentIndex }`} className="tech-icon" />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Carousel;
