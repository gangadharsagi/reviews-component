import * as React from 'react';
import { ReviewDetails } from '../ReviewDetails';
import { mount } from 'enzyme';

describe('ReviewDetails', () => {
  it('should render component', () => {
    const MountedReviewDetails = mount(
      <ReviewDetails />,
    );
    const expected = MountedReviewDetails.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
