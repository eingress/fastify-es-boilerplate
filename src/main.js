import onExit from 'exit-hook';

import api from './api';

const { exit, stderr, stdout } = process;

const run = async () => {
  try {
    await api.run();
  } catch (error) {
    stderr.write(`${error}\n`);
    exit(1);
  }

  onExit(() => {
    api.kill();
    stdout.write('[API] Goodbye.\n');
  });
};

run();
