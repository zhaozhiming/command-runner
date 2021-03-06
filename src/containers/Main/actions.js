import * as at from 'constants/actionTypes';


function receiveCommandResult(command, resultStatus, result) {
  return {
    type: at.RECEIVE_COMMAND_RESULT,
    command,
    resultStatus,
    result,
  };
}

export function runCommand(command) {
  return (dispatch) => (
    fetch('/api/command/run', {
      method: 'post',
      body: JSON.stringify({
        command,
      }),
    })
    .then(response => response.json())
    .then(json => dispatch(receiveCommandResult(command, json.status, json.result)))
  );
}
