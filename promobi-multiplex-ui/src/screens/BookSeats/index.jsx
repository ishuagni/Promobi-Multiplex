/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import ConfirmBookModal from './ConfirmBookModal';

import ChooseSeats from './ChooseSeats';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import {isAuthenticated} from '../../utils/service';
import {bookingSeats} from '../../utils/service';

import './styles.scss';


/**
 * BookSeats Screen
 * @constructor
 */
function BookSeatsScreen() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookSeats, setBookSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Seats imported from redux store
  const {
    seats,
    profile
  } = useSelector(
    (state) => ({
      seats: state.seat.seat,
      profile: state.movie.movie.user
    }),
    shallowEqual,
  );

  const bookMovieSeatsHandler = (seats, price) => {
    if(seats && price) {
      setLoading(true);
      bookingSeats(seats, price)
        .then((res) => {
          console.log('Seats Booked Successfully')
        })
        .then(() => {
          history.push('/showMovies')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
  }

    // Redirect if not authenticated
    if (!isAuthenticated()) {
      history.push('/');
    }

    const manageBookingHandler = (seats, price) => {
      setBookSeats(seats)
      setTotalPrice(price)
      setShowConfirmation(true)
    }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="show-seats">
      <ConfirmBookModal 
        show={showConfirmation}
        handleClose={() => setShowConfirmation(false)}
        seats={bookSeats}
        total_price={totalPrice}
        bookMovie={bookMovieSeatsHandler}
      />

      <TopBar 
        user_name={profile.name}
        current_page={'Book My Show'}
        current_path={'/bookMovie/bookScreen/showSeats'}
      />

      <div className="seat-list-container">
        <div className="list-header">
            <h2>Book My Show : Choose your seats</h2>
        </div>

        <ChooseSeats 
          seats={seats}
          manageBooking={manageBookingHandler}
        />
      </div>

    </div>
  );
}

export default BookSeatsScreen;
