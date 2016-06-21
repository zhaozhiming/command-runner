import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import immutable from 'immutable';
import sinon from 'sinon';
import CommandResult from 'containers/Main/components/CommandResult';
import * as sc from 'constants/status';


describe('CommandResult component', () => {
  it('should render correctly', () => {
    const context = {
      main: immutable.fromJS({
        command: 'pwd',
        resultStatus: sc.COMMAND_RUN_STATUS_FAILED,
        result: '/foo/bar',
      }),
    };
    const wrap = shallow(<CommandResult />, { context });
    expect(wrap.find('h2').length).to.be.equal(2);
    expect(wrap.find('h2').first().text()).to.be.equal('命令: pwd');
    expect(wrap.find('code').text()).to.be.equal('/foo/bar');
  });
});
