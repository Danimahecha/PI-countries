import './App.css';
import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/ladingPage/ladingPage';
import Home from './components/home';
import ActivityPost from './components/home/activitiesCard/FormActivity';
import Details from './components/home/countriesCards/details';

function App() {
  return (

    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>


          <Route exact path="/createactivity">
            <ActivityPost />
          </Route>


          <Route exact path="/detail/:id"
            render={(match) => (
              <Fragment>
                <Details match={match}>
                </Details>
              </Fragment>
            )}
          ></Route>


        </Switch>
      </Router>
    </>

  );
}

export default App;
