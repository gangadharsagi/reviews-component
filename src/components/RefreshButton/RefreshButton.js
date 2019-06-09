import React from 'react';
import { RefreshButtonStyles } from './RefreshButtonStyles';
import { ColorButton } from '../StyledComponents/ColorButton';

export const RefreshButton = () => {
  const classes = RefreshButtonStyles();

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
