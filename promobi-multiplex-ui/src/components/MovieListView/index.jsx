/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import moment from 'moment';

import DeleteMovieModal from './DeleteMovieModal';
import './styles.scss';

/**
 * Movie List View Component
 * @constructor
 */
function MovieListView({movie, showMovieHandler, deleteMovieHandler, user_role}) {
  const [deleteMovie, setDeleteMovie] = useState(false);

  return (
    <div className="movie-list-view">
      <DeleteMovieModal 
        show={deleteMovie}
        handleClose={() => setDeleteMovie(false)}
        movieId={movie.id}
        deleteMovie={deleteMovieHandler}
      />

      <h3 className="flex2">{movie.name}</h3>
      <h3 className="flex2">{moment(movie.movie_time).format('DD/MM/YYYY')}</h3>
      <h3 className="flex1">{movie.rating}</h3>
      <div className="actions">
          <button onClick={() => showMovieHandler(movie.id)} className="update-btn">Book</button>
          {!!user_role && user_role === 'admin' && <button onClick={() => setDeleteMovie(true)} className="delete-btn">Delete</button>}          
      </div>
    </div>
  );
}

export default MovieListView;
