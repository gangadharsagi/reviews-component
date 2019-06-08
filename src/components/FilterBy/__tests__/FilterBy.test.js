import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { FilterBy } from '../FilterBy';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('FilterBy', () => {
  const mockProps = {
    handleCheckBoxChange: () => {},
  };
  it('should render component', () => {
    const Wrapper = shallow(
      <FilterBy {...mockProps}/>,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });

  it('should have 5 CheckBoxes in FilterBy', () => {
    const Wrapper = shallow(
      <FilterBy {...mockProps}/>,
    );
    expect(Wrapper.find(Checkbox)).to.have.length(5);
  });

  it('should have 5 Icons in FilterBy', () => {
    const Wrapper = shallow(
      <FilterBy {...mockProps}/>,
    );
    expect(Wrapper.find(Icon)).to.have.length(5);
  });

  it('should have 5 labels in FilterBy', () => {
    const Wrapper = shallow(
      <FilterBy {...mockProps}/>,
    );
    expect(Wrapper.find('label')).to.have.length(5);
  });
});
