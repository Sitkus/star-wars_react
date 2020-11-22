import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    display: 'flex',
    height: 'calc(100vh - 72px)',
    width: '100%',
    paddingTop: '70px'
  },
  gridContainer: {
    alignItems: 'center',
  },
  linkRoot: {
    textTransform: 'inherit',
    fontWeight: 'normal',
  },
  tabsRoot: {
    color: 'white'
  },
  tabsIndicator: {
    // backgroundColor: 'white',
    width: '100%',
    color: 'black',
    zIndex: -1
  },
  tabsVertical: {
    alignItems: 'center',
  }
}));

const SideNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid item lg={2}>
      <AppBar position="sticky" className={classes.root}>
        <Tabs
          indicatorColor="primary"
          orientation="vertical"
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator,
          }}
        >
          <Tab 
            classes={{
              root: classes.linkRoot
            }}
            label="First" 
          />
          <Tab
            classes={{
              root: classes.linkRoot
            }}
            label="Second"
          />
          <Tab
            classes={{
              root: classes.linkRoot
            }}
            label="Third"
          />
        </Tabs>
      </AppBar>
    </Grid>
  );
}

export default SideNavigation;