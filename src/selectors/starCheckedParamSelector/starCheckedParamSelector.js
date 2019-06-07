import { createSelector } from 'reselect';
import { get } from 'lodash';
import { filterByStarsSelector } from '../filterByStarsSelector';

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const starCheckedFactorySelector = (param, defaultValue) =>
  createSelector(
    filterByStarsSelector,
    data => get(data, param, defaultValue),
);

export const starCheckedParamSelector = {
  checked1: starCheckedFactorySelector(
    '1', false,
  ),
  checked2: starCheckedFactorySelector(
    '2', false,
  ),
  checked3: starCheckedFactorySelector(
    '3', false,
  ),
  checked4: starCheckedFactorySelector(
    '4', false,
  ),
  checked5: starCheckedFactorySelector(
    '5', false,
  ),
};
