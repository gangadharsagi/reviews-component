import * as React from 'react';
import * as PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { SORTING } from '../../constants/SORTING';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    width: 'auto',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  icon: {
    fontSize: 16,
    position: 'relative',
    top: 2,
    left: 2,
  },
}));

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const OrderBy = props => {
  const classes = useStyles();
  return (
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="group">Order By</InputLabel>
      <NativeSelect
        value={props.order}
        onChange={props.handleChange}
        input={<BootstrapInput name="order" id="group-native-simple" />}
      >
        <option value='' />
        <option value={SORTING.MOST_OLDEST}>Ascending</option>
        <option value={SORTING.MOST_RECENT}>Descending</option>
      </NativeSelect>
  </FormControl>
  )
}

OrderBy.propTypes = {};

OrderBy.defaultProps = {};
