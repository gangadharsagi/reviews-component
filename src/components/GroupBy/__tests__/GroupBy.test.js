import * as React from 'react';
import { GroupBy } from '../GroupBy';
import { mount } from 'enzyme';

describe('GroupBy', () => {
  it('should render component', () => {
    const MountedGroupBy = mount(
      <GroupBy />,
    );
    const expected = MountedGroupBy.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
