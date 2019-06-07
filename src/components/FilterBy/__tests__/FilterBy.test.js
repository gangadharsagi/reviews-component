import * as React from 'react';
import { FilterBy } from '../FilterBy';
import { mount } from 'enzyme';

describe('FilterBy', () => {
  it('should render component', () => {
    const MountedFilterBy = mount(
      <FilterBy />,
    );
    const expected = MountedFilterBy.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
