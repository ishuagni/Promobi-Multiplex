import React, {useCallback, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import Description from '../../components/Description';
import TextInput from '../../components/TextInput';

import {createUser} from '../../utils/service';

import './styles.scss';
import {validateEmail} from '../../utils/string';

/**
 * SignUp Screen
 * @constructor
 */
function SignUpScreen() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Signup Click Handler
  const handleSignupClick = useCallback(
    (event) => {
      if (event) event.preventDefault();
      setLoading(true);
      setError('');
      createUser(email, password, name)
        .then(() => {
          history.push('/');
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
    [email, password, name, history],
  );

  return (
    <div className="signup-container">
      <Description />
      <div className="signup-card">
        <h1>Sign Up</h1>
        <div className="email-container">
          <div className="label">Email Address</div>
          <TextInput
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="email-container">
          <div className="label">Name</div>
          <TextInput
            type="text"
            placeholder="Shaurya Agnihotri"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="password-container">
          <div className="label">Password</div>
          <TextInput
            type="password"
            placeholder="Password here ...."
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="error-message">{error !== '' ? error : ''}</div>
        <div className="terms-conditions-wrapper">
          <p>By clicking on sign up button, I agree to the terms of service</p>
        </div>
        <button onClick={handleSignupClick} disabled={!validateEmail(email) || name === '' || password === ''}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Sign Up'}
        </button>

        <p className="registered">Already have account? <a href="/">Login</a> here</p>
      </div>
    </div>
  );
}

export default SignUpScreen;
