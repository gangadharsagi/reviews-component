import * as React from 'react';
import { BootstrapInput } from '../BootstrapInput';
import { mount } from 'enzyme';

describe('BootstrapInput', () => {
  it('should render component', () => {
    const MountedBootstrapInput = mount(
      <BootstrapInput />,
    );
    const expected = MountedBootstrapInput.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
