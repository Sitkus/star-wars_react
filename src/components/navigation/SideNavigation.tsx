import React, { useState, ChangeEvent } from 'react';
import useStyles from './SideNavigation.style';

import { AppBar, Tabs, Tab } from '@material-ui/core';

function SideNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const getTabStyle = (isActive: boolean): string => {
    return isActive ? classes.activeTab : '';
  };

  return (
    <AppBar position="static" className={classes.sideNav}>
      <Tabs
        centered={true}
        indicatorColor="primary"
        orientation="vertical"
        value={value}
        onChange={handleTabChange}
        classes={
          {
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator,
            flexContainerVertical: classes.tabsVertical
          } as any
        }
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
