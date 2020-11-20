import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    flexWrap: 'nowrap',
  },
  table: {
    minWidth: 650
  },
  container: {
    marginBottom: '70px'
  },
  tableContainer: {
    padding: '50px'
  },
  tableRounded: {
    borderRadius: '15px',
    padding: '40px 30px 30px'
  },
  h1: {
    fontSize: '34px',
    fontWeight: 'lighter',
    textAlign: 'center',
    marginBottom: '10px'
  },
  h2: {
    fontSize: '16px',
    textAlign: 'center'
  },
  search: {
    position: 'relative',
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginLeft: 'auto',
    width: '200px',
    borderBottom: '1px solid black',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      // width: 'auto',
    },
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const FirstTab = () => {
  const classes = useStyles();

  return (
    <Grid item>
      {/* Work on making Grid item a container as well and styling it. */}
      <TableContainer 
        component={Paper}
        variant="outlined"
        className={classes.tableRounded}
      >
        <Container className={classes.container}>
          <Typography className={classes.h1} variant="h1">Star wars</Typography>
          <Typography className={classes.h2} variant="h2">Star wars heroes from swapi api</Typography>
        </Container>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="search company"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="none">Name</TableCell>
              <TableCell>Birth date</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Home world</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell padding="none" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default FirstTab;