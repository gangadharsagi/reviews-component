import moment from 'moment';
import { GROUP_TYPES } from '../../constants/GROUP_TYPES';

/**
 * A small description explaining where this function is used and why
 */
export const getCardHeadingHelper = (group, time, index) => {
  if(group === GROUP_TYPES.DAY) {
    return moment(Number(time[index]))
      .format("DD.MM.YYYY");
  }
  if (group === GROUP_TYPES.WEEK) {
   return moment(Number(time[index]))
      .format("DD.MM.YYYY");
  }

  if(group === GROUP_TYPES.MONTH) {
   return moment.months(Number(moment(Number(time[index]))
      .format("MM") )- 1);
  }

  return '';
};
