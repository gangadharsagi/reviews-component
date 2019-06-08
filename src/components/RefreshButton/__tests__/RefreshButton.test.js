import * as React from 'react';
import { RefreshButton } from '../RefreshButton';
import { mount } from 'enzyme';

describe('RefreshButton', () => {
  it('should render component', () => {
    const MountedRefreshButton = mount(
      <RefreshButton />,
    );
    const expected = MountedRefreshButton.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
