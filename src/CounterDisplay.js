import React from 'react';

const CounterDisplay = ({ title, description, counter }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description.text}</p>
      <h5>{counter}</h5>
    </div>
  );
};

export default CounterDisplay;
