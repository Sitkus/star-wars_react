import React, { useState, useEffect, useCallback } from 'react';
import useStyles from './FirstTab.style';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  InputBase
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface CharacterProps {
  name: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

function FirstTab() {
  const classes = useStyles();
  const [characters, setCharacters] = useState<any>([]);
  const [apiCharacters, setApiCharacters] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchHomeWorldOfSingleCharacter = useCallback(async (character: CharacterProps) => {
    const response = await fetch(character.homeworld);
    const data = await response.json();

    character.homeworld = data.name;

    return character;
  }, []);

  const fetchCharacters = useCallback(async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();

      const charactersWithFetchedHomeWorlds = await Promise.all(
        data.results.map(async (character: any) => {
          const characterWithHomeWorld = await fetchHomeWorldOfSingleCharacter(character);

          return characterWithHomeWorld;
        })
      );

      setApiCharacters(charactersWithFetchedHomeWorlds);
      setCharacters(charactersWithFetchedHomeWorlds);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [fetchHomeWorldOfSingleCharacter]);

  const filterList = (value: string) => {
    const filteredCharacters: [] = apiCharacters.filter((character: any) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );

    setCharacters(filteredCharacters);
  };

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <>
      {isLoading ? (
        <p className={classes.loading}>Loading...</p>
      ) : (
        <TableContainer component={Paper} variant="outlined" className={classes.table}>
          <Container className={classes.container}>
            <Typography gutterBottom align="center" variant="h1">
              Star wars
            </Typography>
            <Typography gutterBottom align="center" variant="h2">
              Star wars heroes from swapi api
            </Typography>
          </Container>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search by name..."
              className={`${classes.inputRoot} ${classes.inputField}`}
              onChange={(e) => filterList(e.target.value)}
            />
          </div>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell}>Birth date</TableCell>
                <TableCell className={classes.tableCell}>Gender</TableCell>
                <TableCell className={classes.tableCell}>Home world</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {characters.map((character: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className={classes.tableCell} component="th" scope="row">
                    {character.name}
                  </TableCell>
                  <TableCell className={classes.tableCell}>{character.birth_year}</TableCell>
                  <TableCell className={classes.tableCell}>{character.gender}</TableCell>
                  <TableCell className={classes.tableCell}>{character.homeworld}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default FirstTab;
