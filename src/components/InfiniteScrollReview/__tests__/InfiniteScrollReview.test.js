import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InfiniteScroll from 'react-infinite-scroll-component';
import { InfiniteScrollReview } from '../InfiniteScrollReview';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('InfiniteScrollReview', () => {
  const mockProps = {
    fetchReviewItems: () => {},
  };
  it('should render component', () => {
    const Wrapper = shallow(
      <InfiniteScrollReview {...mockProps}/>,
    );
    const expected = Wrapper.exists();
    expect(expected).toBeTruthy();
  });

  it('should have InfiniteScroll as a child', () => {
    const Wrapper = shallow(
      <InfiniteScrollReview {...mockProps}/>,
    );
    expect(Wrapper.find(InfiniteScroll)).to.have.length(1);
  });
});
