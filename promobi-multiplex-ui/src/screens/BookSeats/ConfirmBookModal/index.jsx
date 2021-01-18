import React from 'react';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';

const ConfirmBookModal = ({ handleClose, show, seats, total_price, bookMovie }) => {
  const showHideClassName = show ? "modal display-block-confirm-book" : "modal display-none";

  const confirmBookingHandler = () => {
    handleClose()
    bookMovie(seats, total_price)
  }

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main-confirm-booking">
        <div className="modal-header">
          <h3>Sure you want to book the movie?</h3>
          <img src={Cross} alt="close modal" onClick={handleClose} />
        </div>

        <h3>Selected Seats Count - {seats.length}</h3>
        <h3>Total Price - {total_price}</h3>
        
        <div className="modal-body">
          <div className="delete-anchors">
            <a href="#top" onClick={confirmBookingHandler} className="delete-anchor">
                Confirm
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

export default ConfirmBookModal;