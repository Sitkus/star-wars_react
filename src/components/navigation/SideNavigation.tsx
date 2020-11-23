import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Styling for Material UI Components
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    height: 'calc(100vh - 72px)',
    width: '100%',
    maxWidth: '250px',
    paddingTop: '70px'
  },
  gridContainer: {
    alignItems: 'center'
  },
  linkRoot: {
    width: '100%',
    textTransform: 'inherit',
    fontWeight: 'normal',
    borderBottom: '1px solid white',
    '&:first-child': {
      borderTop: '1px solid white'
    }
  },
  tabsRoot: {
    color: 'white'
  },
  tabsIndicator: {
    backgroundColor: 'white',
    width: '100%',
    zIndex: -1
  },
  activeTab: {
    backgroundColor: 'white',
    color: 'black'
  },
  tabsVertical: {
    alignItems: 'center'
  }
}));

const SideNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const getTabStyle = (isActive: boolean): string => {
    return isActive ? classes.activeTab : '';
  }

  return (
    <AppBar position="sticky" className={classes.root}>
      <Tabs
        centered={true}
        indicatorColor="primary"
        orientation="vertical"
        value={value}
        onChange={handleChange}
        classes={{
          root: classes.tabsRoot,
          indicator: classes.tabsIndicator
        }}
      >
        <Tab 
          classes={{
            root: classes.linkRoot
          }}
          className={getTabStyle(value === 0)}
          label="First" 
        />

        <Tab
          classes={{
            root: classes.linkRoot
          }}
          className={getTabStyle(value === 1)}
          label="Second"
        />

        <Tab
          classes={{
            root: classes.linkRoot
          }}
          className={getTabStyle(value === 2)}
          label="Third"
        />
      </Tabs>
    </AppBar>
  );
}

export default SideNavigation;