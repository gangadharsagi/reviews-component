import { createSelector } from 'reselect';
import pickBy from 'lodash/pickBy';
import filter from 'lodash/filter';
import { filterByStarsSelector } from '../filterByStarsSelector';
import { getReviewsSelector } from '../getReviewsSelector';

/**
 * A description explaining what data we are getting and where we are using it.
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
