import { connect } from 'react-redux';
import { InfiniteScrollReview } from '../../components/InfiniteScrollReview';
import { getReviewsSelector } from '../../selectors/getReviewsSelector';
import { hasMoreSelector } from '../../selectors/hasMoreSelector';
import { fetchReviews } from '../../actions';
import { groupBySelector } from '../../selectors/groupBySelector';

export const mapStateToProps = (state) => ({
  reviews: getReviewsSelector(state),
  hasMore: hasMoreSelector(state),
  group: groupBySelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  /* TO-DO make it as bind action creator */
  fetchReviewItems: (pageNumber) => {
    dispatch(fetchReviews(pageNumber))
  }
});

export const InfiniteScrollReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfiniteScrollReview);
