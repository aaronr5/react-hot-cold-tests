import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {

  it('Should render the component', () => {
    shallow(<TopNav />);
  });

  it('Should fire callback when new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onNewGame={callback} />);
    wrapper.find('.new').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });

  it('Should fire onInfo callback when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onInfo={callback} />);
    wrapper.find('.what').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});
