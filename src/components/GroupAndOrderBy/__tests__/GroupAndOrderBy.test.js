import * as React from 'react';
import { GroupAndOrderBy } from '../GroupAndOrderBy';
import { mount } from 'enzyme';

describe('GroupAndOrderBy', () => {
  it('should render component', () => {
    const MountedGroupAndOrderBy = mount(
      <GroupAndOrderBy />,
    );
    const expected = MountedGroupAndOrderBy.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
