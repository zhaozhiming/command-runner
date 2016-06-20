import * as at from 'constants/actionTypes';
import immutable from 'immutable';

const INITIAL_STATE = immutable.fromJS({
  command: '',
  result: '',
});

export default function foo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.RECEIVE_COMMAND_RESULT:
      return state
        .update('command', () => action.command)
        .update('result', () => action.result);
    default:
      return state;
  }
}
