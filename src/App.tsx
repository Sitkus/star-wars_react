import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Header, SideNavigation, FirstTab, SecondTab } from './components/';
import Grid from '@material-ui/core/Grid';
import './css/style.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Header value={value} setValue={setValue} />
      <Grid container alignItems="center">
        <SideNavigation />
        <Grid item md={1} lg={2}></Grid>
        <Grid item md={8} lg={6}>
          <TabPanel value={value} index={0}>
            <FirstTab />
          </TabPanel>
        </Grid>
        <Grid item md={8} lg={6}>
          <TabPanel value={value} index={1}>
            <SecondTab />
          </TabPanel>
        </Grid>
        <Grid item md={1} lg={2}></Grid>
      </Grid>
    </>
  );
}

export default App;
