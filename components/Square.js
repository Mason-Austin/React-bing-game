import React from 'react';
import PropTypes from 'prop-types';

function Square({ value }) {
  const handleClick = () => { console.warn(value); };
  return <button type="button" onClick={handleClick} className="square">{value}</button>;
}

export default Square;

Square.propTypes = { value: PropTypes.number.isRequired };
