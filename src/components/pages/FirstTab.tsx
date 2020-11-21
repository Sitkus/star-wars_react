import React, { useState, useEffect } from 'react';
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
import { NamedTupleMember } from 'typescript';

const useStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    flexWrap: 'nowrap',
  },
  table: {
    minWidth: 650
  },
  container: {
    marginBottom: '30px'
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
    marginBottom: '40px',
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
    fontSize: '14px'
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
  tableCell: {
    padding: '7px 50px 7px 0'
  }
}));

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [

//   // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   // createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const FirstTab = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  let [homes, setHomes] = useState([]);
  const [homeWorlds, setHomeWorlds] = useState([]);

  const getStarWarsData = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const result = await response.json();

    result.results.forEach((character: any) => {
      homes = [...homes, character.homeworld] as any;
    });

    setData(result.results);

    homes.forEach((url: any, index: any) => {
      getHomeWorlds(url, index);
    });
  }

  const getHomeWorlds = async (url: string, index: number) => {
    const response = await fetch(url);
    const result = await response.json() as any;

    // Fix this bug
    homeWorlds.splice(index, 0, result.name);
    setHomeWorlds([...homeWorlds]);
  }
  
  useEffect(() => {
    getStarWarsData();
  }, []);

  return (
    <Grid item>
      {/* Work on making Grid item a container as well and styling it. */}
      <TableContainer component={Paper} variant="outlined" className={classes.tableRounded}>
        <Container className={classes.container}>
          <Typography className={classes.h1} variant="h1">Star wars</Typography>
          <Typography className={classes.h2} variant="h2">Star wars heroes from swapi api</Typography>
        </Container>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="search company..."
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
              <TableCell className={classes.tableCell} padding="none">Name</TableCell>
              <TableCell className={classes.tableCell} padding="none">Birth date</TableCell>
              <TableCell className={classes.tableCell} padding="none">Gender</TableCell>
              <TableCell className={classes.tableCell} padding="none">Home world</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((character: any, index: NamedTupleMember) => (
                <TableRow key={character.name}>
                  <TableCell className={classes.tableCell} padding="none" component="th" scope="row">
                    {character.name}
                  </TableCell>
                  <TableCell className={classes.tableCell} padding="none">{character.birth_year}</TableCell>
                  <TableCell className={classes.tableCell} padding="none">{character.gender}</TableCell>
                  <TableCell className={classes.tableCell} padding="none">{homeWorlds[index]}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default FirstTab;