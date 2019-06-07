import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';
import { orderBySelector } from '../orderBySelector';
import { SORTING } from '../../constants/SORTING';

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const selectSortedCardsSelector = createSelector(
  [
    getFilteredDataByStarsSelector,
    orderBySelector,
  ],
  (
    filteredData,
    order,
    ) => order === SORTING.MOST_OLDEST ? sortBy(filteredData, 'reviewCreated') :
    sortBy(filteredData, 'reviewCreated').reverse()
  ,
);
