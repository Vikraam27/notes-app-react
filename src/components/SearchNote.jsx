import React from 'react';
import PropTypes from 'prop-types';

function SearchNote({ onChange }) {
  SearchNote.propTypes = {
    onChange: PropTypes.func.isRequired,
  };
  return (
    <input
      onChange={onChange}
      className="search_notes"
      type="search"
      placeholder="Search notes...."
    />
  );
}

export default SearchNote;
