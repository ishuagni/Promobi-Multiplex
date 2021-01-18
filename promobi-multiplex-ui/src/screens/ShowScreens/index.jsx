/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import ScreenList from '../../components/ScreenList';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import {getSeats} from '../../utils/service'
import {isAuthenticated} from '../../utils/service';

import './styles.scss';
import {setSeat} from '../../store/seat/actions';


/**
 * ShowScreens Screen
 * @constructor
 */
function ShowScreensScreen() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // Screens imported from redux store
  const {
    screens,
    profile
  } = useSelector(
    (state) => ({
      screens: state.screen.screen,
      profile: state.movie.movie.user
    }),
    shallowEqual,
  );

  const bookMyShowHandler = (slot) => {
    if(slot) {
      setLoading(true);
      getSeats(slot)
        .then((res) => {
          dispatch(setSeat(res.data));
        })
        .then(() => {
          history.push('/bookMovie/bookScreen/showSeats')
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="show-screens">

      <TopBar 
        user_name={profile.name}
        current_page={'Screens'}
        current_path={'/bookMovie/showScreens'}
      />

      <div className="screen-list-container">
        <div className="list-header">
            <h1>Screens</h1> <h2>(Screen Count - {screens.length})</h2>
        </div>

        <ScreenList 
          screens={screens}
          bookMyShow={bookMyShowHandler}
        />
      </div>

    </div>
  );
}

export default ShowScreensScreen;
