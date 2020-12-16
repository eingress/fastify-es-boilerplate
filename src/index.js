import Fastify from 'fastify';

import Api from './api';

const { env, exit } = process;
const { NODE_ENV, SERVER_PORT } = env;
const logger = NODE_ENV === 'development' ? true : false;

const server = Fastify({
  logger,
  pluginTimeout: 1e4,
});

server.register(Api);

server.listen(SERVER_PORT || 3e3, (error) => {
  if (error) server.log.error(error) && exit(1);
});
