import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      '@media screen and (max-width: 850px)': {
        flexDirection: 'column'
      }
    },
    sideNavigation: {
      position: 'sticky',
      top: '72px',
      left: 0,
      height: '100%',
      alignSelf: 'flex-start',
      '@media screen and (max-width: 850px)': {
        width: '100%'
      }
    }
  })
);

export default useStyles;
