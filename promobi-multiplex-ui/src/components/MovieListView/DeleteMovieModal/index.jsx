import React from 'react';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';

const DeleteEmployeeModal = ({ handleClose, show, movieId, deleteMovie }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const deleteMovieHandler = () => {
    handleClose()

    deleteMovie(movieId)
  }

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main">
        <div className="modal-header">
          <h3>Sure you want to delete the movie?</h3>
          <img src={Cross} alt="close modal" onClick={handleClose} />
        </div>
        
        <div className="modal-body">
          <div className="delete-anchors">
            <a href="#top" onClick={deleteMovieHandler} className="delete-anchor">
                Delete
            </a>
            <a href="#top" onClick={handleClose} className="cancel-anchor">
                Cancel
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default DeleteEmployeeModal;