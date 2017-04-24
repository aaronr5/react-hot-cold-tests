import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {

  it('Should render the component', () => {
    shallow(<Header />);
  });

  it('Hides the info modal initially', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('InfoModal').exists()).toEqual(false);
  });

  it('Toggles modal on click', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal(true);
    expect(wrapper.find('InfoModal').exists()).toEqual(true);
  });
});
