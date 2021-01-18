/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import MovieListView from '../MovieListView';
import './styles.scss';

/**
 * Movie List Component
 * @constructor
 */
function MovieList({movies, showMovie, deleteMovie, user_role}) {

  return (
    <div className="movie-list">
        <div className="list-table-header">
          <h3 className="flex2">Name</h3>
          <h3 className="flex2">Time</h3>
          <h3 className="flex1">Rating</h3>
          <h3 className="flex2 actions-header">Actions</h3>
        </div>

        <div className="movie-list-view-container">
          {!!movies && movies.map((movie, index) => (
            <MovieListView 
              key={index} 
              movie={movie} 
              showMovieHandler={showMovie}
              deleteMovieHandler={deleteMovie}
              user_role={user_role}
            />
          ))}
        </div>
    </div>
  );
}

export default MovieList;
