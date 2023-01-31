import React from 'react';
import { Button } from '.';
import { shallow } from 'enzyme';

describe('Button test atom', () => {
  it('Button atom full settings', () => {
    const wrapper = shallow(
      <Button
        type="button"
        isDisabled={false}
        label="button test"
        styleInLine={{ color: 'red' }}
      />
    );
    expect(wrapper).toBeDefined();
  });
  it('Button atom full isDisabled', () => {
    const wrapper = shallow(
      <Button
        type="button"
        isDisabled={true}
        className="test"
        styleInLine={{ color: 'red' }}
      >
        Test
      </Button>
    );
    expect(wrapper).toBeDefined();
  });
  it('Button atom isLoading ', () => {
    const wrapper = shallow(
      <Button
        type="button"
        isDisabled={true}
        className="test"
        styleInLine={{ color: 'red' }}
        isLoading={true}
      >
        Test
      </Button>
    );
    wrapper.simulate('click');
    expect(wrapper).toBeDefined();
  });
});
