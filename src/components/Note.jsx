/* eslint-disable react/prop-types */
import React from 'react';
import { showFormattedDate } from '../utils';

function Note({ data, setArcived, onDelete }) {
  const {
    id, title, createdAt, body, archived,
  } = data;

  return (
    <div className="note-item">
      <div className="note-body">
        <h3 className="note-title">{title}</h3>
        <p className="note-date">{showFormattedDate(createdAt)}</p>
        <p className="note-content">{body}</p>
      </div>
      <div className="note-footer">
        <button onClick={() => setArcived(id)} type="button" className="btn-action btn-archive">
          { archived ? <i className="fas fa-archive" /> : <i className="far fa-archive" /> }
        </button>
        <button onClick={() => onDelete(id)} type="button" className="btn-action btn-delete">
          <i className="far fa-trash" />
        </button>
      </div>
    </div>
  );
}

export default Note;
