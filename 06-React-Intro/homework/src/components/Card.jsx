import React from 'react';



export default function Card(props){

  // acá va tu código
  var URLimagen = `http://openweathermap.org/img/wn/${props.img}@2x.png`
  return <div>
    <button onClick = {props.onClose}> x</button>  
      <h1>{props.name}</h1>,
        <div>
            <h3>Max {props.max}</h3>
            <h3> Min{props.min}</h3>
            <h3> {props.img}</h3>
            <img src= {URLimagen} alt="imagen climatica" />
      </div>
</div>
};