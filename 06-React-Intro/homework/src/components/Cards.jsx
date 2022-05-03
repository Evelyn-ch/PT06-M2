import React from 'react';
import cities from "../data.js";
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  
  return (
  <div>
    { cities.map ((city) => {return (<Card 
          key = {city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
  />)}
  )}
  </div>
  );
};
