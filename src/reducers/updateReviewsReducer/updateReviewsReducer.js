import {
  API_START,
  API_END,
  UPDATE_REVIEWS,
  FILTER_REVIEWS,
  ORDER_REVIEWS,
  GROUP_REVIEWS,
  GET_REVIEWS,
} from '../../constants/constants';
import { INITIAL_STATE } from '../../constants/INITIAL_STATE';

export const updateReviewsReducer = (state =  INITIAL_STATE, action) => {
  switch (action.type) {
    case API_START:
      if (action.payload === GET_REVIEWS) {
        return {
          ...state,
          isFetchingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === GET_REVIEWS) {
        return {
          ...state,
          isFetchingData: false
        };
      }
      break;
    case UPDATE_REVIEWS:
      return {
        ...state,
        reviews: state.reviews.concat(action.reviews.reviews),
        hasMore: action.reviews.hasMore,
      };
    case ORDER_REVIEWS:
      return {
        ...state,
        order: action.order
      };
    case GROUP_REVIEWS:
      return {
        ...state,
        group: action.group
      };
    case FILTER_REVIEWS:
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.filter
        },
      };
    default:
      return state
  }
};
