/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';

import Checkbox from '../../../components/Checkbox';
import './styles.scss';

/**
 * ChooseSeats Component
 * @constructor
 */
function ChooseSeats({seats, manageBooking}) {
  const seats_row = Array.from({length: 15}, (_, i) => i + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [price, setPrice] = useState(0);

  const updateSeatsHandler = (e, seat_id, seat_price) => {
      let seats = [...selectedSeats]
      let index = seats.indexOf(seat_id)
      let temp_price = price

      if(index !== -1) {
        seats.splice(index, 1)
        setSelectedSeats(seats)
        setPrice(temp_price-seat_price)
      }
      else {
          setSelectedSeats([...selectedSeats, seat_id])
          setPrice(temp_price+seat_price)
      }
  }

  return (
    <div className="choose-list-container">

        <table className="choose-list">
            <thead className="choose-list-header">
                <tr>
                    <th><h3>▼</h3></th>
                    {!!seats_row && seats_row.map((seat_row, index) => (
                        <th><h4 key={index}>{seat_row}</h4></th>
                    ))}
                </tr>
            </thead>

            <tbody className="choose-seats">
                {!!seats && seats.map((seat_row, index) => (
                    <tr className="seat-row" key={index}>
                        <td key={index} className="row-name">{String.fromCharCode(65 + index)}</td>
                        {!!seat_row && seat_row.map((seat, index) => (
                            <td key={index}>
                                <Checkbox
                                    onChange={(event) => updateSeatsHandler(event, seat.id, seat.price)}
                                    disabled={seat.owned_by}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="selected-seats-prices">
            <div className="seats-and-price">
                <h3>You have selected {selectedSeats.length} seats</h3>
                <h3>Total Price - {price}</h3>
            </div>

            <button 
                onClick={() => manageBooking(selectedSeats, price)} 
                className="proceed-btn"
                disabled={selectedSeats.length === 0}>
                    Proceed to Book
            </button>
        </div>
    </div>
  );
}

export default ChooseSeats;
