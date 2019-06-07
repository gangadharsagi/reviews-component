import groupByTime from 'group-by-time';

/**
 * A small description explaining where this function is used and why
 */
export const getGroupByTimeHelper = (filteredReviews, group) =>
  groupByTime(filteredReviews, 'reviewCreated', group);
