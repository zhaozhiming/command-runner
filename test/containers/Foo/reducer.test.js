import { expect } from 'chai';
import main from 'containers/Main/reducer';
import * as at from 'constants/actionTypes';
import immutable from 'immutable';
import * as sc from 'constants/status';

describe('main reducer', () => {
  it('should receive command result correctly', () => {
    const result = main(immutable.fromJS({}), {
      type: at.RECEIVE_COMMAND_RESULT,
      command: 'pwd',
      resultStatus: sc.COMMAND_RUN_STATUS_SUCCESS,
      result: '/foo/bar',

    });
    expect(result.get('command')).to.be.equal('pwd');
    expect(result.get('resultStatus')).to.be.equal(sc.COMMAND_RUN_STATUS_SUCCESS);
    expect(result.get('result')).to.be.equal('/foo/bar');
  });
});
