/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import ReportListView from '../ReportListView';
import './styles.scss';

/**
 * Report List Component
 * @constructor
 */
function ReportList({reports}) {

  return (
    <div className="report-list">
        <div className="list-table-header">
          <h3 className="flex1">Customer Email</h3>
          <h3 className="flex1">Movie</h3>
          <h3 className="flex1">Seats Booked</h3>
          <h3 className="flex1">Booking Time</h3>
        </div>

        <div className="report-list-view-container">
          {!!reports && reports.map((report, index) => (
            <ReportListView 
              key={index} 
              report={report} 
            />
          ))}
        </div>
    </div>
  );
}

export default ReportList;
