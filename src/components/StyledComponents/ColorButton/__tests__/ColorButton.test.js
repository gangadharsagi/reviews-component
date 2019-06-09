import * as React from 'react';
import { ColorButton } from '../ColorButton';
import { mount } from 'enzyme';

describe('ColorButton', () => {
  it('should render component', () => {
    const MountedColorButton = mount(
      <ColorButton />,
    );
    const expected = MountedColorButton.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
