import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button">
        Toggle Show
      </button>
    </div>
  );
};

export default Button;
