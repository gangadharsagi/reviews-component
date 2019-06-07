import * as React from 'react';
import { LabelValueCell } from '../LabelValueCell';
import { mount } from 'enzyme/build';

describe('LabelValueCell', () => {
  it('should render component', () => {
    const MountedLabelValueCell = mount(
      <LabelValueCell />,
    );
    const expected = MountedLabelValueCell.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
