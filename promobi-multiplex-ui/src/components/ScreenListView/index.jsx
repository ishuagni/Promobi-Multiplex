/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import './styles.scss';

/**
 * Movie List View Component
 * @constructor
 */
function MovieListView({screen_name, slot_time, slot_id, bookMyShowHandler}) {

  return (
    <div className="screen-list-view">

      <h3 className="flex2">Screen {screen_name}</h3>
      <h3 className="flex2">{slot_time}</h3>
      <h3 className="flex2">100$ - 400$</h3>
      <div className="flex2 actions">
          <button onClick={() => bookMyShowHandler(slot_id)} className="update-btn">Book My Show</button>
      </div>
    </div>
  );
}

export default MovieListView;
