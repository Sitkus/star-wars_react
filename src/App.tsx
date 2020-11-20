import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Header, SideNavigation, FirstTab, SecondTab } from './components/';
import Grid from '@material-ui/core/Grid';
import './css/style.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Grid container alignItems="center">
          <SideNavigation />
          <Grid item md={1} lg={2}></Grid>
          <Switch>
            <Route path={'/'}>
              <FirstTab />
            </Route>
            <Route exact path={'/second-tab'}>
              <SecondTab />
            </Route>
          </Switch>
          <Grid item md={1} lg={2}></Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
