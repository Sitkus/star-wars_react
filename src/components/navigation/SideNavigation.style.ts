import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideNav: {
      backgroundColor: theme.palette.secondary.main,
      display: 'flex',
      height: 'calc(100vh - 72px)',
      width: '100%',
      maxWidth: '250px',
      paddingTop: '70px',
      zIndex: 1,
      '@media screen and (max-width: 850px)': {
        backgroundColor: theme.palette.primary.dark,
        color: 'black',
        maxWidth: 'none',
        paddingTop: 0,
        height: 'auto',
        boxShadow: 'none'
      }
    },
    gridContainer: {
      alignItems: 'center'
    },
    linkRoot: {
      width: '100%',
      textTransform: 'inherit',
      fontWeight: 'normal',
      borderBottom: '1px solid white',
      '&:first-child': {
        borderTop: '1px solid white'
      },
      '@media screen and (max-width: 850px)': {
        border: 'none',
        width: 'auto',
        '&:first-child': {
          border: 'none'
        }
      }
    },
    tabsRoot: {
      color: 'white'
    },
    tabsIndicator: {
      backgroundColor: 'white',
      width: '100%',
      zIndex: -1,
      '@media screen and (max-width: 850px)': {
        backgroundColor: 'inherit'
      }
    },
    activeTab: {
      backgroundColor: 'white',
      color: 'black',
      '@media screen and (max-width: 850px)': {
        backgroundColor: 'inherit',
        color: 'inherit'
      }
    },
    tabsVertical: {
      alignItems: 'center',
      '@media screen and (max-width: 850px)': {
        flexDirection: 'row'
      }
    }
  })
);

export default useStyles;
