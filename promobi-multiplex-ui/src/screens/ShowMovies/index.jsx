/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import AddMovieModal from './AddMovieModal';
import MovieList from '../../components/MovieList';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import {createMovie, deleteMovie, getMovies, getScreens, getReports} from '../../utils/service'
import {isAuthenticated} from '../../utils/service';

import './styles.scss';
import {setMovie} from '../../store/movie/actions';
import {setScreen} from '../../store/screen/actions';
import {setReport} from '../../store/report/actions';

/**
 * ShowMovies Screen
 * @constructor
 */
function ShowMoviesScreen() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [addMovie, setAddMovie] = useState(false);

  const dispatch = useDispatch();

  // User Profile, Movies imported from redux store
  const {
    profile,
    movies
  } = useSelector(
    (state) => ({
      profile: state.movie.movie.user,
      movies: state.movie.movie.movies
    }),
    shallowEqual,
  );

  useEffect(() => {
    setLoading(true);
    getMovies()
      .then((res) => {
        dispatch(setMovie(res.data));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

    // Redirect if not authenticated
    if (!isAuthenticated()) {
      history.push('/');
    }

  const addMovieHandler = (movie) => {
    if(movie) {
      setLoading(true);
      createMovie(movie)
        .then((res) => {
          console.log('Employee created Successfully');
        })
        .then(() => {
          return getMovies();
        })
        .then((res) => {
          dispatch(setMovie(res.data));
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

  const bookMovieHandler = (movie_id) => {
    if(movie_id) {
      setLoading(true);
      getScreens(movie_id)
        .then((res) => {
          console.log(res.data);
          dispatch(setScreen(res.data));
        })
        .then(() => {
          history.push('/bookMovie/showScreens')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
  }

  const showReportsHandler = () => {
    setLoading(true);
    getReports()
      .then((res) => {
        dispatch(setReport(res.data));
      })
      .then(() => {
        history.push('/showReports')
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  const deleteMovieHandler = (movieId) => {
    if(movieId) {
      setLoading(true);
      deleteMovie(movieId)
        .then((res) => {
          console.log("Movie deleted Successfully")
        })
        .then(() => {
          return getMovies();
        })
        .then((res) => {
          dispatch(setMovie(res.data));
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

  const openNewMovieModal = () => {
    setAddMovie(true);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="show-movies">

      <AddMovieModal 
        show={addMovie}
        handleClose={() => setAddMovie(false)}
        addMovie={addMovieHandler}
      />

      {!!profile && <TopBar 
        user_name={profile.name}
        current_page={'Dashboard'}
        current_path={'/showMovies'}
      />}

      <div className="movie-list-container">
        <div className="list-header">
            <h1>Movies</h1>
            <div className="buttons-container">
              {!!profile && profile.role === 'admin' && (
                <button onClick={showReportsHandler}>View Reports</button>
              )}
              {!!profile && profile.role === 'admin' && (
                <button onClick={openNewMovieModal}>Add Movie</button>
              )}
            </div>
        </div>

        {!!profile && <MovieList 
          movies={movies}
          showMovie={bookMovieHandler}
          deleteMovie={deleteMovieHandler}
          user_role={profile.role}
        />}
      </div>

    </div>
  );
}

export default ShowMoviesScreen;
