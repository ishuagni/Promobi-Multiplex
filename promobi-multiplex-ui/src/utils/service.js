/**
 * API utilities for
 * fetch requests to be made
 */
import Axios from 'axios';
// import moment from 'moment';

// HTTP instance
// Inject backend URL when to connect with real backend
const HttpInstance = Axios.create({
  baseURL: 'http://localhost:3001',
});

// Get config
function getConfig() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
  };
}

// Set auth token
export function setToken(token) {
  localStorage.setItem('token', token);
}

// remove auth token
export function removeToken() {
  localStorage.clear();
}

// check for authentication
export function isAuthenticated() {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
}

// login using email ID and password
export function login(username, pass) {
  return HttpInstance.post(
    '/auth/login',
    {
      email: username,
      password: pass,
    },
  );
}

// Create Movie
export function createMovie(movie) {
  return HttpInstance.post(
    '/movies',
    {
      name: movie.movieName,
      movie_time: movie.movieTime,
      rating: 5.0,
      screens: movie.screens,
      slots: movie.slots,
      seatsPerScreen: movie.seatsPerScreen
    },
    getConfig()
  );
}

// Create Customer
export function createUser(email, password, name) {
  return HttpInstance.post(
    '/auth/signup',
    {
      email: email,
      password: password,
      name: name,
      role: 'customer'
    }
  );
}

// Book Seats
export function bookingSeats(seats, price) {
  return HttpInstance.put(
    '/seats/book_seats',
    {
      seats: seats,
      price: price
    },
    getConfig()
  )
}

// Delete Movie
export function deleteMovie(movieId) {
  return HttpInstance.delete(
    `/movies/${movieId}`,
    getConfig()
  );
}

// get seats details for particular screen/slot
export function getSeats(slot_id) {
  return HttpInstance.get(`/seats?slot_id=${slot_id}`, getConfig());
}

// get screens details for particular movie
export function getScreens(movie_id) {
  return HttpInstance.get(`/screens?movie_id=${movie_id}`, getConfig());
}

// get all employees details
export function getMovies() {
  return HttpInstance.get('/movies', getConfig());
}

// get all reports details
export function getReports() {
  return HttpInstance.get('/reports', getConfig());
}
