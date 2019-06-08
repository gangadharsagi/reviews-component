import { createSelector } from 'reselect';
import pickBy from 'lodash/pickBy';
import filter from 'lodash/filter';
import { filterByStarsSelector } from '../filterByStarsSelector';
import { getReviewsSelector } from '../getReviewsSelector';

/**
 * This selector is used to filters the reviews by using filtered values in the
 * store
 */
export const getFilteredDataByStarsSelector = createSelector(
  [
    filterByStarsSelector,
    getReviewsSelector,
  ],
  (
    filterByStars,
    reviews,
  ) => {
    const trueValues = Object.keys(
      pickBy(filterByStars, value => value !== false)
    );
    return filter(reviews,
      item => trueValues.includes(item.stars.toString())
    );
  },
);
