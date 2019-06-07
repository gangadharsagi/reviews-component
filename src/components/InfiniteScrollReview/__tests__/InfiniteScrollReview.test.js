import * as React from 'react';
import { InfiniteScrollReview } from '../InfiniteScrollReview';
import { mount } from 'enzyme';

describe('InfiniteScrollReview', () => {
  it('should render component', () => {
    const MountedInfiniteScrollReview = mount(
      <InfiniteScrollReview />,
    );
    const expected = MountedInfiniteScrollReview.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
