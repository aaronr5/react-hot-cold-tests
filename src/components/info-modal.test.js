import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {

  it('Should render the component', () => {
    shallow(<InfoModal />);
  });

  it('fires the callback when the button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<InfoModal onClose={callback} />);
    wrapper.find('.close').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});
