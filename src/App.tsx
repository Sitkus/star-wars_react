import React, { useState, ReactNode } from 'react';
import useStyles from './App.style';
import './css/style.css';
import { Header, SideNavigation } from './components/navigation';
import { FirstTab, SecondTab } from './components/pages';
import Grid from '@material-ui/core/Grid';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
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
};

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <>
      <Header value={value} setValue={setValue} />

      <Grid container alignItems="center" className={classes.gridContainer}>
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
