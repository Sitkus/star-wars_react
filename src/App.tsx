import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Header, SideNavigation, FirstTab, SecondTab } from './components/';
import './css/style.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <SideNavigation />
        <Switch>
          <Route exact path={'/'}>
            <FirstTab />
          </Route>
          <Route exact path={'/second-tab'}>
            <SecondTab />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
