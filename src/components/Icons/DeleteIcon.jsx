import PropTypes from 'prop-types';

/**
 * DeleteIcon component renders an SVG icon representing a delete action.
 *
 * @component
 *
 * @param {Object} props - The properties object.
 * @param {number} [props.width=24] - The width of the icon.
 * @param {number} [props.height=24] - The height of the icon.
 * @param {string} [props.fill='currentColor'] - The fill color of the icon.
 * @returns {JSX.Element} The rendered SVG icon.
 */
const DeleteIcon = ({ width = 24, height = 24, fill = 'currentColor' }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.99996 15.8333C4.99996 16.75 5.74996 17.5 6.66663 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333H4.99996V15.8333ZM15.8333 3.33333H12.9166L12.0833 2.5H7.91663L7.08329 3.33333H4.16663V5H15.8333V3.33333Z"
      fill="#6E6E6E"
    />
  </svg>
);

DeleteIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default DeleteIcon;
