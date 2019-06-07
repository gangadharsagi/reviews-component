import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core';

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
 * @returns {*} a React Class Component
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
