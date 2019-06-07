import { createSelector } from 'reselect';
import { get } from 'lodash';

/**
 * Description of what data this get function is getting
 *
 * @param {{}} state - the redux state
 * @returns {*} the selected param
 */
export const getGetReviews = state => get(
  state,
  'reviews',
  [],
);

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const getReviewsSelector = createSelector(
  getGetReviews,
  GetReviews => GetReviews,
);
