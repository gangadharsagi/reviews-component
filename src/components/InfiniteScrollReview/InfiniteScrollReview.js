import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as PropTypes from 'prop-types';
import { GroupAndOrderBy } from '../GroupAndOrderBy';
import { FilterByContainer } from '../../containers/FilterByContainer';
import { GroupReviewDetailsContainer } from '../../containers/GroupReviewDetailsContainer';
import { ReviewDetailsContainer } from '../../containers/ReviewDetailsContainer';
import './infinite-scroll-review.css';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
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
      <GroupAndOrderBy />
      <FilterByContainer />
      <InfiniteScroll
        dataLength={this.props.reviews.length}
        next={this.fetchMoreData}
        hasMore={this.props.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage='No More Results'
      >
        {
          this.props.group === '' ?
            <ReviewDetailsContainer /> :
            <GroupReviewDetailsContainer />
        }

      </InfiniteScroll>
  </div>
  )}
}

InfiniteScrollReview.propTypes = {};

InfiniteScrollReview.defaultProps = {};
