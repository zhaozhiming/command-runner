import * as at from 'constants/actionTypes';
import immutable from 'immutable';
import * as sc from 'constants/status';

const INITIAL_STATE = immutable.fromJS({
  command: '',
  resultStatus: sc.COMMAND_RUN_STATUS_SUCCESS,
  result: '',
});

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.RECEIVE_COMMAND_RESULT:
      return state
        .update('command', () => action.command)
        .update('resultStatus', () => action.resultStatus)
        .update('result', () => action.result);
    default:
      return state;
  }
}
