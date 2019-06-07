import * as React from 'react';
import { GroupReviewDetails } from '../GroupReviewDetails';
import { mount } from 'enzyme';

describe('GroupReviewDetails', () => {
  it('should render component', () => {
    const MountedGroupReviewDetails = mount(
      <GroupReviewDetails />,
    );
    const expected = MountedGroupReviewDetails.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
