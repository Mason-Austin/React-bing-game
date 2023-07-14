import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function Square() {
  const [value, setValue] = useState(null);
  const handleClick = () => { setValue('x'); };
  return <button type="button" onClick={handleClick} className="square">{value}</button>;
}

export default Square;
