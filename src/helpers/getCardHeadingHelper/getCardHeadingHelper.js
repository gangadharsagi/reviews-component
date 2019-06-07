import moment from 'moment';

/**
 * A small description explaining where this function is used and why
 */
export const getCardHeadingHelper = (group, time, index) => {
  if(group === 'day') {
    return moment(Number(time[index]))
      .format("DD.MM.YYYY");
  }
  if (group === 'week') {
   return moment(Number(time[index]))
      .format("DD.MM.YYYY");
  }

  if(group === 'month') {
   return moment.months(Number(moment(Number(time[index]))
      .format("MM") )- 1);
  }

  return '';
};
