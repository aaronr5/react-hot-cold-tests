import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {

  it('Renders the component', () => {
    shallow(<Game />);
  });

  it('Can guess a number', () => {
    const wrapper = shallow(<Game />);

    wrapper.setState({
      correctAnswer: 60
    });

    wrapper.instance().guess(10);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
    expect(wrapper.state('guesses')).toEqual([10]);
  });

  it('Can Start a new game', () => {
    const wrapper = shallow(<Game />);

    wrapper.setState({
      correctAnswer: 20,
      guesses: [50, 40, 30],
      feedback: 'You\'re Warm'
    });

    wrapper.instance().newGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
  });

});
