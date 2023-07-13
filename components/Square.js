import React from 'react';
import PropTypes from 'prop-types';

function Square({ value }) {
  return <button type="button" className="square">{value}</button>;
}

export default Square;

Square.propTypes = { value: PropTypes.string.isRequired };
