import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { data } from './data';

function Timeline() {
  const [selectedYear, setSelectedYear] = useState(1994);
  const { theme } = useContext(AppContext);

  const selectYear = ({ target }) => {
    const selecteds = document.querySelectorAll('.selected');
    if (selecteds.length > 0) {
      selecteds.forEach((element) => {
        element.classList.remove('selected');
      })
    }
    target.classList.add("selected");
    setSelectedYear(Number(target.value));
  }

  const createYearList = () => {
    return (
    <ul className="years-list">
      { data.map((element, index) => (
        <li
          key={ index }
          className={ `year-line ${ index === 0 ? 'selected' : '' }` }
          onClick={ (event) => selectYear(event) }
          value={ element.year }
        >
          { element.year }
        </li>
      )) }
    </ul>
    )
  }

  return (
    <main className={`timeline ${ theme === 'light' ? 'fullwhite' : 'fullgray' }`}>
      <section id="timeline-controls">
        { createYearList() }
      </section>
      <section className="timeline-discription">
        {
          data.filter((element) => (element.year === selectedYear.toString())).map((element) => (
            <div className="description-container" key={ element.year }>
              <h2 className="description-title">{ element.title }</h2>
              <p className="description-text">{ element.description }</p>
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Timeline;
