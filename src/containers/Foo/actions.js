import * as at from 'constants/actionTypes';


function receiveCommandResult(command, result) {
  return {
    type: at.RECEIVE_COMMAND_RESULT,
    command,
    result,
  };
}

export function runCommand(command) {
  return (dispatch) => (
    fetch('/command/run', {
      method: 'post',
      body: JSON.stringify({
        command,
      }),
    })
    .then(response => response.json())
    .then(json => dispatch(receiveCommandResult(command, json.result)))
  );
}
