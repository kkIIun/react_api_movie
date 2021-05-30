import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import './Movie.css';

const Button = ({ id, setSelectedNumber }) => {
  const onClickNumber = () => {
    console.log({ id }.id);
    setSelectedNumber({ id }.id);
  };

  return (
    <button className="button" onClick={onClickNumber}>
      {id + 1}
    </button>
  );
};

export default Button;
