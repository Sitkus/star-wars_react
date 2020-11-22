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

const useStyles = makeStyles((theme: Theme) => ({
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
    marginLeft: 'auto',
    marginBottom: '20px',
    width: '200px',
    borderBottom: '1px solid black',
  },
  searchIcon: {
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
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    width: '100%',
  },
  tableCell: {
    padding: '7px 50px 7px 0'
  }
}));

const FirstTab = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  let [homes, setHomes] = useState([]);
  let [homeWorlds, setHomeWorlds] = useState([]);

  const fetchSWData = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const result = await response.json();

    result.results.forEach((character: any) => {
      homes = [...homes, character.homeworld] as any;
    });

    setData(result.results);

    homes.forEach((url: any, index: any) => {
      fetchHomeWorlds(url, index);
    });
  }

  const fetchHomeWorlds = async (url: string, index: number) => {
    const response = await fetch(url);
    const result = await response.json();

    homeWorlds = [...homeWorlds, result.name] as any;
    setHomeWorlds([...homeWorlds]);
  }
  
  useEffect(() => {
    fetchSWData();
  }, []);

  return (
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
            data.map((character: any, index: number) => (
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
  );
}

export default FirstTab;