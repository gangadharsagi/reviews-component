import { createSelector } from 'reselect';
import { groupBySelector } from '../groupBySelector';
import { orderBySelector } from '../orderBySelector';
import { getGroupByTimeSelector } from '../getGroupByTimeSelector';
import { SORTING } from '../../constants/SORTING';

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const selectGroupedCardsSelector = createSelector(
  [
    groupBySelector,
    getGroupByTimeSelector,
    orderBySelector,
  ],
  (
    group,
    groupedItems,
    order,
  )=> {

    if (order === SORTING.MOST_OLDEST) {
      return groupedItems.reverse();
    }


    if (order === SORTING.MOST_RECENT) {
      return groupedItems;
    }

    return groupedItems;
  },
);
