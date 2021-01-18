/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import moment from 'moment';
import './styles.scss';

/**
 * Report List View Component
 * @constructor
 */
function MovieListView({report}) {

  return (
    <div className="report-list-view">

      <h3 className="flex1">{report.email}</h3>
      <h3 className="flex1">{report.movie}</h3>
      <h3 className="flex1">{report.seats}</h3>
      <h3 className="flex1">{moment(report.created_at).format('DD/MM/YYYY HH:mm:ss')}</h3>
    </div>
  );
}

export default MovieListView;
