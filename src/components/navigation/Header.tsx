import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Navigation imports
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

// Icons imports
import AccountCircle from '@material-ui/icons/AccountCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import InsertChartOutlinedSharpIcon from '@material-ui/icons/InsertChartOutlinedSharp';

const useStyles = makeStyles({
    root: {
      padding: '0 40px',
      zIndex: 10
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
  },
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
                icon={<DescriptionIcon style={{marginRight: '7px'}} />} 
                label="First tab" 
                href="#" 
              />
              <LinkTab classes={{
                  root: classes.linkRoot,
                  wrapper: classes.linkWrapper
                }}
                icon={<InsertChartOutlinedSharpIcon style={{marginRight: '7px'}} />}
                label="Second tab" 
                href="./second-tab"
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