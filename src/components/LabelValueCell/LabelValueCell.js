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
 * This component is used to display label and value details. if rating is true
 * then value will display as star icons
 *
 * @returns {*} a React Stateless Functional Component
 */
export const LabelValueCell = ({ label, value, stars, rating }) => {
  const classes = useStyles();

  return (
    <div>
      <label className={classes.label}>
        {label}
      </label>
      {
        rating ?
          <Rating
            rating={rating}
            stars={stars}
          /> :
          <div className={classes.value}>
            {value}
          </div>
      }
    </div>
  );
};

LabelValueCell.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  rating: PropTypes.bool,
  stars: PropTypes.number,
};

LabelValueCell.defaultProps = {
  label: '',
  value: '',
  rating: false,
  stars: 0,
};
