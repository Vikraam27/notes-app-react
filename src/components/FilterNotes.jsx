import React from 'react';
import PropTypes from 'prop-types';

function FilterNotes({ onChange }) {
  FilterNotes.propTypes = {
    onChange: PropTypes.func.isRequired,
  };
  return (
    <select onChange={onChange} className="filter">
      <option value="">All</option>
      <option value="1">Arcived notes</option>
      <option value="0">Unrcived notes</option>
    </select>
  );
}

export default FilterNotes;
