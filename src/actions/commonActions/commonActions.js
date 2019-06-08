import { apiAction } from '../../utils';
import { UPDATE_REVIEWS, FILTER_REVIEWS, ORDER_REVIEWS, GROUP_REVIEWS, GET_REVIEWS } from '../../constants/constants';

export const updateReviews = reviews => ({
  type: UPDATE_REVIEWS,
  reviews,
});

export const filterReviews = filter => ({
  type: FILTER_REVIEWS,
  filter,
});

export const orderReviews = order => ({
  type: ORDER_REVIEWS,
  order,
});

export const groupReviews = group => ({
  type: GROUP_REVIEWS,
  group,
});

export const fetchReviews = (pageNumber) => (
  apiAction({
    url: `https://cors-anywhere.herokuapp.com/https://sellics-frontend-test.herokuapp.com/reviews/${pageNumber}`,
    onSuccess: updateReviews,
    onFailure: console.log('Error occured loading items'),
    label: GET_REVIEWS,
  })
);
