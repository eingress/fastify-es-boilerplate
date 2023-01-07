import onExit from 'async-exit-hook';

import api from './api';

const { exit, stderr, stdout } = process;

const API_OPTS = {
  // See https://www.fastify.io/docs/latest/Server
};

const run = () => {
  try {
    api.run(API_OPTS);
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
