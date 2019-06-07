import { createSelector } from 'reselect';
import { groupBySelector } from '../groupBySelector';
import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';
import { getGroupByTimeHelper } from '../../helpers/getGroupByTimeHelper';

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const getGroupByTimeSelector = createSelector(
  [
    groupBySelector,
    getFilteredDataByStarsSelector,
  ],
  (
    group,
    filteredReviews
  ) => Object.values(getGroupByTimeHelper(filteredReviews, group))
)
