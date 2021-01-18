import React, {useCallback, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import Description from '../../components/Description'
import TextInput from '../../components/TextInput';

import './styles.scss';
import {login, setToken, getMovies} from '../../utils/service';
import {validateEmail} from '../../utils/string';
import {useDispatch} from 'react-redux';
import {setMovie} from '../../store/movie/actions';

/**
 * Login Screen
 * @constructor
 */
function LoginScreen() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Login Click Handler
  const handleLoginClick = useCallback(
    (event) => {

      if (event) event.preventDefault();
      setLoading(true);
      setError('');
      login(email, pass)
        .then((res) => {
          setToken(res.data.auth_token);
        })
        .then(() => {
          return getMovies();
        })
        .then((res) => {
          dispatch(setMovie(res.data));
        })
        .then(() => {
          history.push('/showMovies');
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setError(err.response.data.error.user_authentication);
        });
    },
    [email, pass, history, dispatch],
  );

  // Login by pressing enter enabled
  const handleKeyPress = (e) => {
    if (e.key !== undefined && e.key === 'Enter') {
      handleLoginClick(null);
    }
  };

  return (
    <div className="login-container">
      <Description />
      <div className="login-card">
        <h1>Log in</h1>
        <div className="email-container">
          <div className="label">Email Address</div>
          <TextInput
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="password-container">
          <div className="label">Password</div>
          <TextInput
            type="password"
            placeholder="Password here ...."
            value={pass}
            onChange={(event) => {
              setPass(event.target.value);
            }}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="error-message">{error !== '' ? error : ''}</div>
        <div className="terms-conditions-wrapper">
          <p>By clicking on log in button, I agree to the terms of service</p>
        </div>
        <button onClick={handleLoginClick} disabled={(!validateEmail(email)) || (pass === '')}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Log in'}
        </button>

        <p className="not-registered">Not registered yet? <a href="/signup">Signup</a> here</p>
      </div>
    </div>
  );
}

export default LoginScreen;
