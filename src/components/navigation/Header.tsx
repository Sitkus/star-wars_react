import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DescriptionIcon from '@material-ui/icons/Description';
import InsertChartOutlinedSharpIcon from '@material-ui/icons/InsertChartOutlinedSharp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 40px',
    },
    logo: {
      flexGrow: 1,
    },
    logoImage: {
      height: '100%',
      width: '40px',
      padding: '5px 0'
    },
    linkRoot: {
      textTransform: 'inherit',
      paddingLeft: '0',
      paddingRight: '100px',
      marginRight: '30px'
    },
    linkWrapper: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      fontWeight: 'normal',
    },
  }),
);

const a11yProps = (index: any) => {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  className?: string;
  classes?: object;
  label?: string;
  href?: string;
  icon?: React.ReactElement<{}>;
}

const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function MenuAppBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
      <AppBar color="transparent" position="static">
        <Grid container alignItems="center" className={classes.root}>
          <Grid item className={classes.logo}>
            <img src="./images/r2d2.png" className={classes.logoImage} />
          </Grid>
          <Grid item>
            <Tabs value={value} onChange={handleChange}>
              <LinkTab classes={{
                  root: classes.linkRoot,
                  wrapper: classes.linkWrapper
                }} 
                icon={<DescriptionIcon />} 
                label="First tab" 
                href="/" 
              />
              <LinkTab classes={{
                  root: classes.linkRoot,
                  wrapper: classes.linkWrapper
                }}
                icon={<InsertChartOutlinedSharpIcon />}
                label="Second tab" 
                href="/second-tab"
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