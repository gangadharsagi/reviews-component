import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import { groupBySelector } from '../groupBySelector';
import { orderBySelector } from '../orderBySelector';
import { getGroupByTimeSelector } from '../getGroupByTimeSelector';
import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const selectGroupedCardsSelector = createSelector(
  [
    groupBySelector,
    getGroupByTimeSelector,
    orderBySelector,
    getFilteredDataByStarsSelector,
  ],
  (
    group,
    groupedItems,
    order,
    filteredCards,
  )=> {
    const cards = group === '' ?
      filteredCards :
      groupedItems;
    if (order === '0') {
      return sortBy(cards, 'reviewCreated');
    }


    if (order === '1') {
      return sortBy(cards, 'reviewCreated').reverse();
    }

    return cards;
  },
);
