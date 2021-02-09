import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 40px',
      zIndex: 10
    },
    appBar: {
      '@media screen and (max-width: 850px)': {
        boxShadow: 'none'
      }
    },
    logo: {
      flexGrow: 1
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
      marginRight: '30px',
      '@media screen and (max-width: 850px)': {
        paddingRight: '30px',
        marginRight: '15px'
      }
    },
    linkWrapper: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      fontWeight: 'normal'
    }
  })
);

export default useStyles;
