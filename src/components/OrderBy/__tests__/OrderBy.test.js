import * as React from 'react';
import { OrderBy } from '../OrderBy';
import { mount } from 'enzyme';

describe('OrderBy', () => {
  it('should render component', () => {
    const MountedOrderBy = mount(
      <OrderBy />,
    );
    const expected = MountedOrderBy.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
