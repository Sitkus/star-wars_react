import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: '30px'
    },
    table: {
      borderRadius: '15px',
      padding: '40px 30px 30px',
      margin: '40px 0',
      '@media screen and (max-width: 850px)': {
        padding: '20px 40px'
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
    inputField: {
      paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
      width: '100%'
    },
    tableCell: {
      padding: '7px 50px 7px 0'
    },
    loading: {
      textAlign: 'center',
      fontFamily: 'Montserrat'
    }
  })
);

export default useStyles;
