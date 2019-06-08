import React from 'react';
import {
  createStyles,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#82939C',
    minWidth: '150px',
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: '#2099C3',
    },
  },
  span: {
    textTransform: 'capitalize',
  },
}))(Button);

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      marginBottom: theme.spacing(2),
    },
    container: {
      marginRight: theme.spacing(3),
      display: 'flex',
      justifyContent: 'flex-end',
    }
  }),
);

export const RefreshButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        refresh
      </ColorButton>
    </div>
  );
};
