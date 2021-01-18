import React, {useState} from 'react';
import {Spinner} from 'react-bootstrap';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';
import TextInput from '../../../components/TextInput';



const AddMovieModal = ({ handleClose, show, addMovie }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [movieName, setMovieName] = useState('');
  const [movieTime, setMovieTime] = useState('');
  const [screens, setScreens] = useState(1);
  const [slots] = useState(4);
  const [seatsPerScreen] = useState(105);
  const [loading] = useState(false);

  const handleAddMovie = () => {
    handleClose()

    const movie = {
      'movieName': movieName,
      'movieTime': movieTime,
      'screens': screens,
      'slots': slots,
      'seatsPerScreen': seatsPerScreen
    }

    addMovie(movie)
  }

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main-add-movie">
        <div className="modal-header">
          <h3>Add Movie</h3>
          <img src={Cross} alt="close modal" onClick={handleClose} />
        </div>
        
        <div className="modal-body">
          <div className="email-container">
            <div className="label">Movie Name</div>
            <TextInput
              type="text"
              placeholder="Avengers: End Game"
              value={movieName}
              onChange={(event) => {
                setMovieName(event.target.value);
              }}
            />
          </div>
          <div className="flex-container">
            <div className="email-container">
              <div className="label">Movie Time</div>
              <TextInput
                type="date"
                placeholder="26-01-2021"
                value={movieTime}
                onChange={(event) => {
                  setMovieTime(event.target.value);
                }}
              />
            </div>
            <div className="drpdn-container">
              <div className="label">Number of Screens</div>
              <select
                value={screens}
                onChange={(event) => {
                  setScreens(event.target.value);
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className="flex-container">
            <div className="email-container">
              <div className="label">Number of slots per screen (FIXED)</div>
              <TextInput
                type="number"
                value={slots}
                disabled
              />
            </div>
            <div className="email-container">
              <div className="label">Number of seats per screen (FIXED)</div>
              <TextInput
                type="number"
                value={seatsPerScreen}
                disabled
              />
            </div>
          </div>
          <button disabled={movieName === '' || movieTime === ''} onClick={handleAddMovie}>
          {loading ? <Spinner animation="border" size="sm" /> : 'ADD'}
        </button>
        </div>
      </section>
    </div>
  );
};

export default AddMovieModal;