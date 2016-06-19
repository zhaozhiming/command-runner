import { exec } from 'child_process';

export default {
  method: 'POST',
  path: '/command/run',
  config: {
    handler(request, reply) {
      const { command } = JSON.parse(request.payload);
      exec(command, (error, stdout, stderr) => {
        /* eslint no-console:0 */
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
          console.log(`error: ${error}`);
        }
        reply({ result: stdout && stdout.trim() });
      });
    },
  },
};
