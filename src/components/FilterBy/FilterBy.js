import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { OrderBy } from '../OrderBy';

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
 * This component is used to filter the reviews based on the stars value
 *
 * @param {string} handleCheckBoxChange - is used to update the star values in
 *  store
 * @param {string} handleCheckBoxChange - is used to update the star values
 * @param {boolean} checked1 - checked1 value is used to filter 1star reviews
 * @param {boolean} checked2 - checked2 value is used to filter 2star reviews
 * @param {boolean} checked3 - checked3 value is used to filter 3star reviews
 * @param {boolean} checked4 - checked4 value is used to filter 4star reviews
 * @param {boolean} checked5 - checked5 value is used to filter 5star reviews
 * @returns {*} a React Stateless Functional Component
 */
export const FilterBy = ({
  handleCheckBoxChange,
  checked1,
  checked2,
  checked3,
  checked4,
  checked5,
}) => {
  const classes = useStyles();
    return (
      <FormGroup row>
        <div className='checkBox-group'>
          <Checkbox
            checked={checked1}
            onChange={handleCheckBoxChange('1')}
            value="checked1"
            color="primary"
          />
          <label>1</label>
          <Icon
            color="disabled"
            className={classes.icon}>
            star
          </Icon>
        </div>
        <div className='checkBox-group'>
          <Checkbox
            checked={checked2}
            onChange={handleCheckBoxChange('2')}
            value="checked2"
            color="primary"
          />
          <label>2</label>
          <Icon
            color="disabled"
            className={classes.icon}>
            star
          </Icon>
        </div>
        <div className='checkBox-group'>
          <Checkbox
            checked={checked3}
            onChange={handleCheckBoxChange('3')}
            value="checked3"
            color="primary"
          />
          <label>3</label>
          <Icon
            color="disabled"
            className={classes.icon}>
            star
          </Icon>
        </div>
        <div className='checkBox-group'>
          <Checkbox
            checked={checked4}
            onChange={handleCheckBoxChange('4')}
            value="checked4"
            color="primary"
          />
          <label>4</label>
          <Icon
            color="disabled"
            className={classes.icon}>
            star
          </Icon>
        </div>
        <div className='checkBox-group'>
          <Checkbox
            checked={checked5}
            onChange={handleCheckBoxChange('5')}
            value="checked5"
            color="primary"
          />
          <label>5</label>
          <Icon
            color="disabled"
            className={classes.icon}>
            star
          </Icon>
        </div>
      </FormGroup>
    );
};

FilterBy.propTypes = {
  handleCheckBoxChange: PropTypes.func,
  checked1: PropTypes.bool,
  checked2: PropTypes.bool,
  checked3: PropTypes.bool,
  checked4: PropTypes.bool,
  checked5: PropTypes.bool,
};

OrderBy.defaultProps = {
  handleCheckBoxChange: () => {},
  checked1: false,
  checked2: false,
  checked3: false,
  checked4: false,
  checked5: true,
};
