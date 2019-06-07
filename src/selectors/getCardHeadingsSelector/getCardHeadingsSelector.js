import { createSelector } from 'reselect';
import { groupBySelector } from '../groupBySelector';
import { orderBySelector } from '../orderBySelector';
import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';
import { getGroupByTimeHelper } from '../../helpers/getGroupByTimeHelper';

/**
 * A description explaining what data we are getting and where we are using it.
 */
export const getCardHeadingsSelector = createSelector(
  [
    groupBySelector,
    getFilteredDataByStarsSelector,
    orderBySelector
  ],
  (
    group,
    filteredData,
    order,
  ) => {
    const data = Object.keys(getGroupByTimeHelper(filteredData, group));
    if (order === '0') {
      return data;
    }

    if (order === '1') {
      return data.reverse();
    }

    return data;
  },
);
