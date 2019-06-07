import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 16,
  },
}));

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const Rating = props => {
  const classes = useStyles();
  return (
    <div>
      {
        Array.from({ length: 5 }, (item, index) => (
          <Icon
            color={index < props.stars ?
              '' :
              'disabled'
            }
            className={classes.icon}>
            star
            key={item}
          </Icon>
        ))
      }
    </div>
  );
}

Rating.propTypes = {};

Rating.defaultProps = {};
