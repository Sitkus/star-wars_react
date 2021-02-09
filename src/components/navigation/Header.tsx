import React, { Dispatch, SetStateAction } from 'react';
import useStyles from './Header.style';

import { AppBar, Tabs, Tab, IconButton, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import InsertChartOutlinedSharpIcon from '@material-ui/icons/InsertChartOutlinedSharp';

const a11yProps = (index: number) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`
  };
};

interface HeaderProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

function Header(props: HeaderProps) {
  const { value, setValue } = props;
  const classes = useStyles();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar color="inherit" position="sticky" className={classes.appBar}>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item className={classes.logo}>
          <img src="./images/r2d2.png" className={classes.logoImage} alt="R2D2 Star Wars robot icon" />
        </Grid>

        <Grid item>
          <Tabs value={value} onChange={handleTabChange}>
            <Tab
              {...a11yProps(0)}
              classes={{
                root: classes.linkRoot,
                wrapper: classes.linkWrapper
              }}
              icon={<DescriptionIcon style={{ marginRight: '7px' }} />}
              label="First tab"
            />

            <Tab
              {...a11yProps(0)}
              classes={{
                root: classes.linkRoot,
                wrapper: classes.linkWrapper
              }}
              icon={<InsertChartOutlinedSharpIcon style={{ marginRight: '7px' }} />}
              label="Second tab"
            />
          </Tabs>
        </Grid>

        <Grid item>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
