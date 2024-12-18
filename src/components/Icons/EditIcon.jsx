import PropTypes from 'prop-types';

/**
 * EditIcon component renders an SVG icon representing an edit action.
 *
 * @component
 *
 * @param {Object} props - The properties object.
 * @param {number} [props.width=20] - The width of the SVG icon.
 * @param {number} [props.height=20] - The height of the SVG icon.
 * @param {string} [props.fill='currentColor'] - The fill color of the SVG icon.
 * @returns {JSX.Element} The rendered SVG icon.
 */
const EditIcon = ({ width = 20, height = 20, fill = 'currentColor' }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8508 2.70833 14.0525 2.625C14.2542 2.54167 14.4658 2.5 14.6875 2.5C14.9092 2.5 15.1244 2.54167 15.3333 2.625C15.5422 2.70833 15.7228 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.3092 4.5 17.3858 4.70833C17.4625 4.91667 17.5006 5.125 17.5 5.33333C17.5 5.55556 17.4619 5.7675 17.3858 5.96917C17.3097 6.17083 17.1881 6.35472 17.0208 6.52083L6.04167 17.5H2.5ZM14.6667 6.5L15.8333 5.33333L14.6667 4.16667L13.5 5.33333L14.6667 6.5Z"
      fill="#6E6E6E"
    />
  </svg>
);

EditIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default EditIcon;
