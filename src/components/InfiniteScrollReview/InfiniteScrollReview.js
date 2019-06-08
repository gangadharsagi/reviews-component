import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { GroupAndOrderBy } from '../GroupAndOrderBy';
import { FilterByContainer } from '../../containers/FilterByContainer';
import { GroupReviewDetailsContainer } from '../../containers/GroupReviewDetailsContainer';
import { ReviewDetailsContainer } from '../../containers/ReviewDetailsContainer';
import './infinite-scroll-review.css';
import { RefreshButton } from '../RefreshButton';

/**
 * This component is used for Grouping, Sorting, Filtering and loading the
 * reviews by using Infinite scroll
 *
 * @param {array} reviews - reviews from the response
 * @param {boolean} hasMore - if hasMore is true will make call again on scroll
 *  else won't make the call
 * @returns {*} a React Stateless Functional Component
 */
export class InfiniteScrollReview extends React.Component {

  state = {
    pageNumber: 1
  };

  componentDidMount() {
    this.props.fetchReviewItems(this.state.pageNumber);
  }

  fetchMoreData = () => {
    this.props.fetchReviewItems(this.state.pageNumber + 1);
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  render() {
  return (
    <div className='container'>
      <div className={'wrapper'}>
        <GroupAndOrderBy />
        <FilterByContainer />
        <RefreshButton />
        <InfiniteScroll
          dataLength={this.props.reviews.length}
          next={this.fetchMoreData}
          hasMore={this.props.hasMore}
          loader={<h4 className='text-center'>Loading...</h4>}
          endMessage={<h4 className='text-center'>No More Results</h4>}
        >
          {
            isEmpty(this.props.group) ?
              <ReviewDetailsContainer /> :
              <GroupReviewDetailsContainer />
          }

        </InfiniteScroll>
      </div>
  </div>
  )}
}

InfiniteScrollReview.propTypes = {
  reviews: PropTypes.array,
  group: PropTypes.string,
};

InfiniteScrollReview.defaultProps = {
  reviews: [],
  group: '',
};
