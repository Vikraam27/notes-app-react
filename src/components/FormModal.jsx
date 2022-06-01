import React from 'react';
import PropTypes from 'prop-types';

function FormModal(props) {
  FormModal.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  const closeModal = () => {
    const modal = document.getElementById('myModal');

    if (modal) {
      modal.style.display = 'none';
    }
  };

  const { children, onSubmit } = props;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Book</h3>
          <button type="button" onClick={() => closeModal()} className="close">&times;</button>
        </div>
        <form id="form" method="post" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default FormModal;
