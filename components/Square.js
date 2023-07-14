import PropTypes from 'prop-types';

function Square({ value, onSquareClick }) {
  return <button type="button" onClick={onSquareClick} className="square">{value}</button>;
}

export default Square;

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};
