import React from 'react';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, errorMessage, ...otherProps }) => {
    if (errorMessage) {
      return (
        <div className="spinner-overlay">
          <h1>{errorMessage}</h1>
        </div>
      );
    } else {
      return isLoading ? (
        <div className="spinner-overlay">
          <div className="spinner-container" />
        </div>
      ) : (
        <WrappedComponent {...otherProps} />
      );
    }
  };
  return Spinner;
};

export default WithSpinner;
