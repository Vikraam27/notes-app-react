import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  id, name, placeholder, isRequired, onChange, value, maxLength,
}) {
  Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
  };
  Input.defaultProps = {
    isRequired: true,
    maxLength: 999999999999999,
  };
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
      />
    </>
  );
}
