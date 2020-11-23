import React, { useState } from 'react';
import './css/style.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Header, SideNavigation, FirstTab, SecondTab } from './components/';

// Material UI Components
import Grid from '@material-ui/core/Grid';

// Styling for Material UI Components
const useStyles = makeStyles((theme: Theme) => ({
  sideNavigation: {
    alignSelf: 'flex-start'
  }
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

// Custom TabPanel for navigation
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
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <>
      <Header value={value} setValue={setValue} />

      <Grid container alignItems="center">

        <Grid item lg={2} className={classes.sideNavigation}>
          <SideNavigation />
        </Grid>

        <Grid item sm={true} md={1} lg={2}></Grid>

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

        <Grid item sm={true} md={1} lg={2}></Grid>

      </Grid>
    </>
  );
}

export default App;
