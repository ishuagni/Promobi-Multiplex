/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import ScreenListView from '../ScreenListView';
import './styles.scss';

/**
 * Screen List Component
 * @constructor
 */
function ScreenList({screens, bookMyShow}) {

  console.log(screens);

  return (
    <div className="screen-list">
        <div className="list-table-header">
          <h3 className="flex2">Name</h3>
          <h3 className="flex2">Slot Time</h3>
          <h3 className="flex2">Price Range</h3>
          <h3 className="flex2 actions-header">Actions</h3>
        </div>

        <div className="screen-list-view-container">
          {!!screens && screens.map((screen) => {
            return (screen.slot.map((slot, index) => (
              <ScreenListView 
                screen_name={screen.name}
                slot_time={slot.slot_time}
                slot_id={slot.id}
                key={index}
                bookMyShowHandler={bookMyShow}
              />
            )))
          })}
        </div>
    </div>
  );
}

export default ScreenList;
