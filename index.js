const { exec } = require('child_process');

const command = "http-server ./ --port=80 --cors='https://game-data.gameindy.com/isp/*'";

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
