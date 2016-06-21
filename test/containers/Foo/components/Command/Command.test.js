import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Command from 'containers/Main/components/Command';
import { Input, Button } from 'antd';

describe('Command component', () => {
  let context;
  beforeEach(() => {
    context = {
      actions: {
        runCommand: sinon.spy(),
      },
    };
  });

  it('should render correctly', () => {
    const wrap = shallow(<Command />);
    expect(wrap.find(Input).length).to.be.equal(1);
    expect(wrap.find(Button).length).to.be.equal(1);
  });

  it('should input change correctly', () => {
    const wrap = shallow(<Command />);
    wrap.find(Input).simulate('change', { target: { value: 'foo' } });
    expect(wrap.state('command')).to.be.equal('foo');
  });

  it('should input keydown without enter key correctly', () => {
    const wrap = shallow(<Command />, { context });
    wrap.find(Input).simulate('keydown', { which: 'wrong' });
    expect(context.actions.runCommand.callCount).to.be.equal(0);
  });

  it('should input keydown with enter key correctly', () => {
    const wrap = shallow(<Command />, { context });
    wrap.find(Input).simulate('keydown', { which: 13 });
    expect(context.actions.runCommand.callCount).to.be.equal(1);
  });

  it('should button click correctly', () => {
    const wrap = shallow(<Command />, { context });
    wrap.find(Button).simulate('click');
    expect(context.actions.runCommand.callCount).to.be.equal(1);
  });
});
