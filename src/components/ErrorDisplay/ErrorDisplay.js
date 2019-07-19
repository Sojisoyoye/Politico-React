import React from 'react';
import PropTypes from 'prop-types';

const ErrorDisplay = ({ errors }) => {
  return (
    <ul className="toast_error">
      {errors.map((error, index) => {
        return <li key={index}>{error}</li>;
      })}
    </ul>
  );
};

ErrorDisplay.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.array])
};

ErrorDisplay.defaultProps = {
  errors: []
};

export default ErrorDisplay;
