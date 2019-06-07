import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Rating } from '../Rating';

const useStyles = makeStyles(theme => ({
  label: {
    textTransform: 'upperCase',
    position: 'relative',
    display: 'inline-block',
    fontSize: 10,
    color: 'grey',
  },
  value: {
    minHeight: 30,
    color: 'black',
    lineHeight: 1,
    fontWeight: 'bold',
  },
}));

/**
 * A description explaining what we use this component for
 *
 * @returns {*} a React Stateless Functional Component
 */
export const LabelValueCell = (props) => {

  const classes = useStyles();
  return (
    <div>
      <label className={classes.label}>
        {props.label}
      </label>
      {
        props.rating ?
          <Rating
            rating={props.rating}
            stars={props.stars}
          />
        :
        <div className={classes.value}>
          {props.value}
        </div>
      }
    </div>
  );
};

LabelValueCell.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

LabelValueCell.defaultProps = {
  label: '',
  value: '',
};
