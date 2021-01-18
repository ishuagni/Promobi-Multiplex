import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import ShowMoviesScreen from './screens/ShowMovies';
import ShowReportScreen from './screens/ShowReports';
import ShowScreensScreen from './screens/ShowScreens';
import BookSeatsScreen from './screens/BookSeats';

import './App.scss';

// Routes for the app have been declared using ReactRouter
function App() {
  return (
    <div className="App">
      <Router>
        {/* <TopBar /> */}
        <div className="app-layout">
          <Switch>
            <Route path="/" exact>
              <LoginScreen />
            </Route>
            <Route path="/signup">
              <SignUpScreen />
            </Route>
            <Route path="/showReports" exact>
              <ShowReportScreen />
            </Route>
            <Route path="/showMovies" exact>
              <ShowMoviesScreen />
            </Route>
            <Route path="/bookMovie/bookScreen/showSeats" exact>
              <BookSeatsScreen />
            </Route>
            <Route path="/bookMovie/showScreens" exact>
              <ShowScreensScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
