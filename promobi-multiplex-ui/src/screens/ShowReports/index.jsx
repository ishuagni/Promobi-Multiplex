/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import ReportList from '../../components/ReportList';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import {getReports} from '../../utils/service'
import {isAuthenticated} from '../../utils/service';

import './styles.scss';
import {setReport} from '../../store/report/actions';

/**
 * ShowReports Screen
 * @constructor
 */
function ShowReportsScreen() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // User Profile, Reports imported from redux store
  const {
    profile,
    reports
  } = useSelector(
    (state) => ({
      profile: state.report.report.user,
      reports: state.report.report.reports
    }),
    shallowEqual,
  );

  useEffect(() => {
    setLoading(true);
    getReports()
      .then((res) => {
        dispatch(setReport(res.data));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

    // Redirect if not authenticated
    if (!isAuthenticated()) {
      history.push('/');
    }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="show-reports">

      {!!profile && <TopBar 
        user_name={profile.name}
        current_page={'Dashboard'}
        current_path={'/showMovies'}
      />}

      <div className="report-list-container">
        <div className="list-header">
            <h1>Booking Reports</h1>
        </div>

        <ReportList 
          reports={reports}
        />
      </div>

    </div>
  );
}

export default ShowReportsScreen;
