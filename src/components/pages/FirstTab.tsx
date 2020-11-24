import React, { useState, useEffect } from 'react';

// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Icons from Material UI
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

// Styling for Material UI Components
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: '30px'
  },
  table: {
    borderRadius: '15px',
    padding: '40px 30px 30px',
    margin: '40px 0',
    '@media screen and (max-width: 850px)': {
      padding: '20px 40px',
    }
  },
  search: {
    position: 'relative',
    marginLeft: 'auto',
    marginBottom: '20px',
    width: '200px',
    borderBottom: '1px solid black'
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '14px'
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    width: '100%'
  },
  tableCell: {
    padding: '7px 50px 7px 0'
  }
}));

const FirstTab = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>([]);
  const [apiData, setApiData] = useState([] as any);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let [homes, setHomes] = useState<number>(0);

  /**
   * Primary: data fetching from swapi.dev
   */
  const fetchCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const resultData = await response.json();

    resultData.results.forEach((character: {}, index: number, data: []) => {
      fetchHomeWorld(character, index, data);
    });

    setData(resultData.results);
  }

  // interface CharacterProps {
  //   name: string;
  //   birth_year: string;
  //   gender: string;
  //   homeworld?: string | undefined | null;
  //   home?: string;
  // }
  
  /**
   * Secondary: fetching homeworld for each individual character
   * 
   * @param character Object of a whole character
   * @param index Index of array
   * @param data Full array of data
   */
  const fetchHomeWorld = async (character: any, index: number, data: any) => {
    const response = await fetch(character.homeworld);
    const result = await response.json();

    data[index].home = result.name;
    setHomes(homes++);

    setData([...data]);
    setApiData([...data]);

    setIsLoading(homes >= 10 ? false : true);
  }

  /**
   * Filter data by name inserted in search input
   * 
   * @param value Input value
   */
  const filterList = (value: string) => {
    const filteredData: [] = apiData.filter((character: any) => {
      return character.name.includes(value);
    });

    setData(filteredData);
  }
  
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {
        isLoading ?
        null :
        <TableContainer component={Paper} variant="outlined" className={classes.table}>

          <Container className={classes.container}>
            <Typography gutterBottom align="center" variant="h1">Star wars</Typography>
            <Typography gutterBottom align="center" variant="h2">Star wars heroes from swapi api</Typography>
          </Container>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search by name..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onChange={(e) => filterList(e.target.value)}
            />
          </div>

          <Table>
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
                    <TableCell className={classes.tableCell} padding="none">{character.home}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
          
        </TableContainer>
      }
    </>
  );
}

export default FirstTab;