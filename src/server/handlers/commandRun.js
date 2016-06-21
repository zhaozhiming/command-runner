import { exec } from 'child_process';
import * as sc from 'constants/status';

export default {
  method: 'POST',
  path: '/api/command/run',
  config: {
    handler(request, reply) {
      const { command } = JSON.parse(request.payload);
      let status = sc.COMMAND_RUN_STATUS_SUCCESS;
      let result;
      exec(command, (error, stdout, stderr) => {
        /* eslint no-console:0 */
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        result = `${stdout && stdout.trim()}\n${stderr && stderr.trim()}`;
        if (error !== null) {
          console.log(`error: ${error}`);
          status = sc.COMMAND_RUN_STATUS_FAILED;
          result = `${error}`;
        }
        reply({ status, result });
      });
    },
  },
};
